import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ClientTable from "./ClientTable"; // Asegúrate de importar ClientTable
import Modal from "./ClientModal"; // Importa el nuevo componente Modal
import Swal from "sweetalert2"; // Importa SweetAlert2

import "../componentsClient/styles.css";
import logo from "../imagenes/logo.png";

function Client() {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [editingClient, setEditingClient] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false); // Estado para el modal
  const [errorMessage, setErrorMessage] = useState(""); // Estado para mensajes de error

  useEffect(() => {
    const autenticar = localStorage.getItem("Exito");
    if (!autenticar) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("Exito");
    navigate("/");
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/clientes`);
      setClients(response.data);
      console.log(response.data);
    } catch (error) {
      setErrorMessage("Error al cargar clientes. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  const createOrUpdateClient = async (clientData) => {
    try {
      if (editingClient) {
        await axios.put(
          `http://localhost:8080/api/clientes/${editingClient.clienteID}`,
          clientData
        );
      } else {
        await axios.post(`http://localhost:8080/api/clientes`, clientData);
      }
      fetchClients();
      setModalOpen(false); // Cerrar el modal después de guardar
      setEditingClient(null); // Resetear el cliente en edición
    } catch (error) {
      console.log("Error al crear o actualizar cliente", error);
    }
  };

  const handleEditClient = (client) => {
    setEditingClient(client);
    setModalOpen(true); // Abrir el modal para editar
  };

  const handleDeleteClient = async (clienteID) => {
    // Mostrar alerta de confirmación antes de eliminar
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      customClass: {
      popup: "swal-custom", // Aplica la clase personalizada
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:8080/api/clientes/${clienteID}`);
          fetchClients(); // Actualizar la lista de clientes
          Swal.fire({
            icon: "success",
            title: "Cliente eliminado",
            text: "El cliente ha sido eliminado con éxito.",
            confirmButtonText: "Aceptar",
            customClass: {
            popup: "swal-custom", // Aplica la clase personalizada
            },
          });
        } catch (error) {
          console.log("Error al eliminar cliente", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo eliminar el cliente. Inténtalo de nuevo.",
            confirmButtonText: "Aceptar",
            customClass: {
            popup: "swal-custom", // Aplica la clase personalizada
            },
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="Container_Major">
        <div className="logo-container">
          <img
            src={logo}
            alt="Logo Gimnasio Atlhon"
            className="principal-logo-image"
          />
        </div>
        <nav className="navbar">
          <Link to="/Major">Principal</Link>
          <Link to="/Plan">Planes</Link>
          <Link to="/Factura">Factura</Link>
          <button onClick={handleLogout} className="logout-button">
            Salir
          </button>
        </nav>
      </div>
      <h1>Clientes</h1>
      <button onClick={() => setModalOpen(true)}>Crear Nuevo Cliente</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ClientTable
        clients={clients}
        onEdit={handleEditClient}
        onDelete={handleDeleteClient}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={createOrUpdateClient}
        initialClient={editingClient}
      />
    </div>
  );
}

export default Client;

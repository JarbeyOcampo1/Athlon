import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../imagenes/logo.png";
import "./Factura.css"; // Archivo CSS para estilos personalizados

function Factura() {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  // Verifica si el token de autenticación existe en el almacenamiento local
  useEffect(() => {
    const autenticar = localStorage.getItem("Exito");
    if (!autenticar) {
      navigate("/");
    }
  }, [navigate]);

  // Elimina el token de autenticación
  const handleLogout = () => {
    localStorage.removeItem("Exito");
    navigate("/");
  };

  // Obtiene los clientes registrados
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/clientes");
        setClients(response.data);
      } catch (error) {
        console.error("Error al cargar los clientes", error);
      }
    };
    fetchClients();
  }, []);

  return (
    <div className="factura-container">
      <div className="Container_Major">
        <div className="logo-container">
          <img
            src={logo}
            alt="Logo Gimnasio Atlhon"
            className="principal-logo-image"
            onClick={() => navigate("/Major")} // Navega a la página principal al hacer clic
            style={{ cursor: "pointer" }} // Cambia el cursor para indicar que es clickeable
          />
        </div>
        <nav className="navbar">
          <Link to="/Client">Clientes</Link>
          <Link to="/Plan">Planes</Link>
          <Link to="/Major">Principal</Link>
          <button onClick={handleLogout} className="logout-button">
            Salir
          </button>
        </nav>
      </div>

      <div className="factura-header">
        <h1>Factura</h1>
        <p>Gimnasio Athlon</p>
        <p>Dirección: Calle Ficticia 123, Ciudad</p>
        <p>Teléfono: +123 456 789</p>
      </div>

      <div className="factura-clientes">
        <label htmlFor="client-select">Seleccionar Cliente:</label>
        <select
          id="client-select"
          onChange={(e) => {
            const selectedId = e.target.value; // Obtén el valor seleccionado
            const client = clients.find(
              (client) => client.clienteID.toString() === selectedId
            ); // Compara como cadena
            setSelectedClient(client); // Actualiza el estado con el cliente seleccionado
          }}
        >
          <option value="">-- Seleccione un cliente --</option>
          {clients.map((client) => (
            <option key={client.clienteID} value={client.clienteID}>
              {client.nombreC} {client.apellidoC}
            </option>
          ))}
        </select>
      </div>

      {selectedClient && (
        <div className="factura-detalles">
          <h2>Detalles del Cliente</h2>
          <p>
            <strong>Nombre:</strong> {selectedClient.nombreC}{" "}
            {selectedClient.apellidoC}
          </p>
          <p>
            <strong>Email:</strong> {selectedClient.email}
          </p>
          <p>
            <strong>Fecha de Registro:</strong> {selectedClient.fechaRegistro}
          </p>
          <p>
            <strong>Fecha de Vencimiento:</strong>{" "}
            {selectedClient.fechaVencimiento}
          </p>
        </div>
      )}

      <div className="factura-tabla">
        <h2>Detalles de la Factura</h2>
        <table>
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Membresía Mensual</td>
              <td>1</td>
              <td>$50.00</td>
              <td>$50.00</td>
            </tr>
            <tr>
              <td>Entrenamiento Personal</td>
              <td>5</td>
              <td>$20.00</td>
              <td>$100.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">
                <strong>Total</strong>
              </td>
              <td>
                <strong>$150.00</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Factura;

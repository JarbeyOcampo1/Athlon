import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../imagenes/logo.png";
import "./Plan.css";
import PlanModal from "./PlanModal"; // Importa el modal

function Plan() {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [editingPlan, setEditingPlan] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

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

  // Obtiene los planes desde el servidor
  const fetchPlans = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/planes");
      setPlans(response.data);
    } catch (error) {
      console.error("Error al cargar los planes", error);
    }
  };

  // Efecto para cargar los planes al montar el componente
  useEffect(() => {
    fetchPlans();
  }, []);

  // Crea o actualiza un plan
  const createOrUpdatePlan = async (planData) => {
    try {
      if (editingPlan) {
        // Actualiza el plan existente
        await axios.put(
          `http://localhost:8080/api/planes/${editingPlan.id}`,
          planData
        );
      } else {
        // Crea un nuevo plan
        await axios.post("http://localhost:8080/api/planes", planData);
      }
      fetchPlans();
      setModalOpen(false);
      setEditingPlan(null);
    } catch (error) {
      console.error("Error al crear o actualizar el plan", error);
    }
  };

  // Maneja la edición de un plan
  const handleEditPlan = (plan) => {
    setEditingPlan(plan);
    setModalOpen(true);
  };

  // Elimina un plan
  const handleDeletePlan = async (planId) => {
    try {
      await axios.delete(`http://localhost:8080/api/planes/${planId}`);
      fetchPlans();
    } catch (error) {
      console.error("Error al eliminar el plan", error);
    }
  };

  return (
    <div>
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
          <Link to="/Major">Principal </Link>
          <Link to="/Factura">Factura</Link>
          <button onClick={handleLogout} className="logout-button">
            Salir
          </button>
        </nav>
      </div>

      <h1>Planes del Gimnasio</h1>

      <button id="add-plan-button" onClick={() => setModalOpen(true)}>Agregar Nuevo Plan</button>

      {/* Tabla de planes */}
      <div className="plan-table">
        <h2>Planes Disponibles</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Duración</th>
              <th>Precio</th>
              <th>Beneficios</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id}>
                <td>{plan.name}</td>
                <td>{plan.duration}</td>
                <td>{plan.price}</td>
                <td>{plan.benefits}</td>
                <td>
                  <button onClick={() => handleEditPlan(plan)}>Editar</button>
                  <button onClick={() => handleDeletePlan(plan.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para agregar o editar planes */}
      <PlanModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={createOrUpdatePlan}
        initialPlan={editingPlan}
      />
    </div>
  );
}

export default Plan;

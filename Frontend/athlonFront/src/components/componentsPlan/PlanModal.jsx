import React, { useState, useEffect } from "react";
import "./PlanModal.css"; // Asegúrate de crear este archivo para los estilos del modal

function PlanModal({ isOpen, onClose, onSubmit, initialPlan }) {
  const [planData, setPlanData] = useState({
    name: "",
    duration: "",
    price: "",
    benefits: "",
  });

  useEffect(() => {
    if (initialPlan) {
      setPlanData(initialPlan);
    } else {
      setPlanData({ name: "", duration: "", price: "", benefits: "" });
    }
  }, [initialPlan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanData({ ...planData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(planData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{initialPlan ? "Editar Plan" : "Agregar Nuevo Plan"}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre del Plan:</label>
            <input
              type="text"
              name="name"
              value={planData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Duración (en meses):</label>
            <input
              type="number"
              name="duration"
              value={planData.duration}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Precio:</label>
            <input
              type="text"
              name="price"
              value={planData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Beneficios:</label>
            <textarea
              name="benefits"
              value={planData.benefits}
              onChange={handleChange}
              required
            />
          </div>
          <div className="modal-actions">
            <button type="submit">Guardar</button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PlanModal;

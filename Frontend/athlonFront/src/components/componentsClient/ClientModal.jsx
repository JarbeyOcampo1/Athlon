import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Modal = ({ isOpen, onClose, onSubmit, initialClient }) => {
  const [nombreC, setNombreC] = useState("");
  const [apellidoC, setApellidoC] = useState("");
  const [email, setEmail] = useState("");
  const [fechaRegistro, setFechaRegistro] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");

  useEffect(() => {
    if (initialClient) {
      setNombreC(initialClient.nombreC);
      setApellidoC(initialClient.apellidoC);
      setEmail(initialClient.email);
      setFechaRegistro(initialClient.fechaRegistro);
      setFechaVencimiento(initialClient.fechaVencimiento);
    } else {
      setNombreC("");
      setApellidoC("");
      setEmail("");
      setFechaRegistro("");
      setFechaVencimiento("");
    }
  }, [initialClient]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const resData = {
      nombreC,
      apellidoC,
      email,
      fechaRegistro,
      fechaVencimiento,
    };

    onSubmit(resData);

    // Mostrar alerta de éxito
    Swal.fire({
      icon: "success",
      title: initialClient ? "Cliente actualizado" : "Cliente registrado",
      text: initialClient
        ? "Los datos del cliente se han actualizado correctamente."
        : "El cliente ha sido registrado con éxito.",
      confirmButtonText: "Aceptar",
      customClass: {
      popup: "swal-custom", // Aplica la clase personalizada
      },
    });

    onClose(); // Cerrar el modal después de enviar
  };

  const handleClose = () => {
    // Mostrar alerta de confirmación al cerrar el modal
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Los cambios no guardados se perderán.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar",
      cancelButtonText: "Cancelar",
      customClass: {
      popup: "swal-custom", // Aplica la clase personalizada
      },
    }).then((result) => {
      if (result.isConfirmed) {
        onClose(); // Cerrar el modal si el usuario confirma
      }
    });
  };

  if (!isOpen) return null; // No renderizar si el modal no está abierto

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={handleClose}>
          X
        </button>
        <h2 className="modal-title">
          {initialClient ? "Editar Cliente" : "Nuevo Cliente"}
        </h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="modal-form-group">
            <label className="modal-label">Nombres: </label>
            <input
              type="text"
              className="modal-input"
              placeholder="Nombres del cliente"
              value={nombreC}
              onChange={(e) => setNombreC(e.target.value)}
              required
            />
          </div>
          <div className="modal-form-group">
            <label className="modal-label">Apellidos: </label>
            <input
              type="text"
              className="modal-input"
              placeholder="Apellidos del cliente"
              value={apellidoC}
              onChange={(e) => setApellidoC(e.target.value)}
              required
            />
          </div>
          <div className="modal-form-group">
            <label className="modal-label">Email: </label>
            <input
              type="email"
              className="modal-input"
              placeholder="Email del cliente"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="modal-form-group">
            <label className="modal-label">Fecha de Registro: </label>
            <input
              type="date"
              className="modal-input"
              value={fechaRegistro}
              onChange={(e) => setFechaRegistro(e.target.value)}
              required
            />
          </div>
          <div className="modal-form-group">
            <label className="modal-label">Fecha de Vencimiento: </label>
            <input
              type="date"
              className="modal-input"
              value={fechaVencimiento}
              onChange={(e) => setFechaVencimiento(e.target.value)}
              required
            />
          </div>
          <div className="modal-form-group">
            <button type="submit" className="modal-submit-button">
              {initialClient ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

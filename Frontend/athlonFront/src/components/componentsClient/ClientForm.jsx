import React, { useState, useEffect } from "react";

function ClientForm({ onSubmit, initialClient }) {
  // Estado para los datos
  const [nombreC, setNombreC] = useState("");
  const [apellidoC, setApellidoC] = useState("");
  const [email, setEmail] = useState("");
  const [fechaRegistro, setFechaRegistro] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");

  // Formato para pasar la fecha a formato dd-mm-yyyy a yyyy-mm-dd
  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const [day, month, year] = dateString.split("/");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (initialClient) {
      setNombreC(initialClient.nombreC);
      setApellidoC(initialClient.apellidoC);
      setEmail(initialClient.email);
      setFechaRegistro(formatDateForInput(initialClient.fechaRegistro));
      setFechaVencimiento(formatDateForInput(initialClient.fechaVencimiento));
    }
  }, [initialClient]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const resData = {
      nombreC,
      apellidoC,
      email,
      fechaRegistro: formatDateForInput(fechaRegistro),
      fechaVencimiento: formatDateForInput(fechaVencimiento),
    };
    onSubmit(resData);
    setNombreC("");
    setApellidoC("");
    setEmail("");
    setFechaRegistro("");
    setFechaVencimiento("");
  };

  // Ingreso de los datos del cliente
  return (
      <div className="form-content">
        <form onSubmit={handleSubmit} className="client-form">
          <div>
            <label>Nombres: </label>
            <input
              type="text"
              placeholder="Nombres del cliente"
              value={nombreC}
              onChange={(e) => setNombreC(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Apellidos: </label>
            <input
              type="text"
              placeholder="Apellidos del cliente"
              value={apellidoC}
              onChange={(e) => setApellidoC(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              placeholder="Email del cliente"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Fecha de Registro: </label>
            <input
              type="date"
              value={fechaRegistro}
              onChange={(e) => setFechaRegistro(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Fecha de Vencimiento: </label>
            <input
              type="date"
              value={fechaVencimiento}
              onChange={(e) => setFechaVencimiento(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">
              {initialClient ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
    
    </div>
  );
}

export default ClientForm;

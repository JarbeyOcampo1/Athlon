import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./inicioSesion.css";

function InicioSesionForm({ onCancel }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [nombreUsuario, setNombreUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [cargo, setCargo] = useState("");

  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null); // Referencia para el contenedor de la tarjeta

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsFlipped((prev) => !prev); // Cambia el estado solo si se hace clic fuera de la tarjeta
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData(event.target);
      const nombreUsuario = formData.get("usuario");
      const password = formData.get("password");

      const response = await axios.post("http://localhost:8080/api/logins/validar", {
        nombreUsuario,
        password,
      });

      if (response.status === 200 && response.data.includes("Exito")) {
        console.log("Inicio de sesión exitoso");
        localStorage.setItem("Exito", response.data.token);
        navigate("/Major");
      } else {
        setError(response.data);
      }
    } catch (err) {
      setError("Credenciales incorrectas. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegistro = async (event) => {
    event.preventDefault();

    try {
      const loginData = { nombreUsuario, password, cargo };

      // Llamar al endpoint para registrar un nuevo usuario
      await axios.post("http://localhost:8080/api/logins", loginData);

      // Vaciar los campos del formulario tras el registro
      setNombreUsuario("");
      setPassword("");
      setCargo("");

      // Confirmar que el registro fue exitoso
      alert("Registro exitoso!");

      // Cambiar a la cara de inicio de sesión
      setIsFlipped(false);
    } catch (error) {
      console.error("Error al registrar un nuevo usuario:", error);
      setError("Error al registrar un nuevo usuario. Intente nuevamente.");
    }
  };

  return (
    <div className="auth-3d-container">
      <div
        className={`auth-3d-card ${isFlipped ? "flipped" : ""}`}
        ref={cardRef}
      >
        <div className="card-face card-front">
          <div className="instruction">Haga clic fuera de la tarjeta para registrarse</div>
          <div className="avatar">👤</div>
          <h2 className="auth-title">Iniciar Sesión</h2>

          <form className="auth-form" onSubmit={handleLogin}>
            {error && <p className="error-message">{error}</p>}

            <div className="form-group">
              <label htmlFor="usuario">Usuario:</label>
              <input
                id="usuario"
                name="usuario"
                type="text"
                placeholder="Nombre del usuario"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Contraseña"
                required
              />
            </div>

            <div className="auth-actions">
              {onCancel && (
                <button type="button" className="cancel-button" onClick={onCancel}>
                  Cancelar
                </button>
              )}
              <button className="submit-button" type="submit" disabled={loading}>
                {loading ? "Cargando..." : "Iniciar Sesión"}
              </button>
            </div>
          </form>
        </div>

        <div className="card-face card-back">
          <div className="instruction">Haga clic fuera de la tarjeta para iniciar sesión</div>
          <h2 className="auth-title">Registrarse</h2>

          <form className="auth-form" onSubmit={handleRegistro}>
            {error && <p className="error-message">{error}</p>}

            <div className="form-group">
              <label htmlFor="input-usuario">Usuario:</label>
              <input
                type="text"
                id="input-usuario"
                placeholder="Nombre del usuario"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="input-password">Contraseña:</label>
              <input
                type="password"
                id="input-password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="input-cargo">Cargo:</label>
              <input
                type="text"
                id="input-cargo"
                placeholder="Cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                required
              />
            </div>

            <div className="auth-actions">
              <button type="submit" className="submit-button">
                Registrar Usuario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InicioSesionForm;

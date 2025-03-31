import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./inicioSesion.css";

function InicioSesionForm({ onLogin, onCancel }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData(event.target);
      const nombreUsuario = formData.get("usuario");
      const password = formData.get("password");

      await onLogin({ nombreUsuario, password });
    } catch (err) {
      setError("Credenciales incorrectas. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-formI" onSubmit={handleSubmit}>
        <h2 className="login-title">Iniciar Sesión</h2>

        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label className="label-usuario" htmlFor="usuario">
            Usuario:
          </label>
          <input
            className="input-usuario"
            id="usuario"
            name="usuario"
            type="text"
            placeholder="Nombre del usuario"
            required
          />
        </div>

        <div className="form-group">
          <label className="label-password" htmlFor="password">
            Contraseña:
          </label>
          <input
            className="input-password"
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            required
          />
        </div>

        <div className="login-actions">
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancelar
          </button>
          <button className="submit-button" type="submit" disabled={loading}>
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </div>

        <a
          href="#"
          className="register-link"
          onClick={(e) => {
            e.preventDefault();
            navigate("/registro"); // Redirige a la página de registro
          }}
        >
          Registrarse
        </a>
      </form>
    </div>
  );
}

export default InicioSesionForm;

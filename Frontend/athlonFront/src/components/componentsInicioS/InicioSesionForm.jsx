import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./inicioSesion.css";

function InicioSesionForm({ onCancel }) {
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

      //peticion a la API para validar el inicio de sesión
      const response = await axios.post("http://localhost:8080/api/logins/validar", {
        nombreUsuario,
        password,
      });

      // Verifica si la respuesta es exitosa y contiene el mensaje esperado
      if (response.status === 200 && response.data.includes("Exito")) {
        console.log("Inicio de sesión exitoso");

        navigate("/Major"); // Redirige a la página principal después de iniciar sesión
      }else {
        setError(response.data);
      }
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
            navigate("/Logins"); // Redirige a la página de registro
          }}
        >
          Registrarse
        </a>
      </form>
    </div>
  );
}

export default InicioSesionForm;

import { useState } from "react";
import "./inicioSesion.css";


function InicioSesionForm({ onLogin }) {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      await onLogin({ nombreUsuario, password });
      setNombreUsuario("");
      setPassword("");
    } catch (err) {
      setError("Credenciales incorrectas. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="login-formI" onSubmit={handleSubmit}>
      <h2 className="login-title">Iniciar Sesión</h2>

      {error && <p className="error-message">{error}</p>}

      <div className="form-group">
        <label className="label-usuario" htmlFor="usuario">Usuario:</label>
        <input
          className="input-usuario"
          id="usuario"
          type="text"
          placeholder="Nombre del usuario"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="label-password" htmlFor="password">Contraseña:</label>
        <div className=" password-wrapper">
          <input
            className="input-password"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </button>
        </div>
      </div>

      <button className="submit-button" type="submit" disabled={loading}>
        {loading ? "Cargando..." : "Iniciar Sesión"}
      </button>
    </form>
  );
}

export default InicioSesionForm;
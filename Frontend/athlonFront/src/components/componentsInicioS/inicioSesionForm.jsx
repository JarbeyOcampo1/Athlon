import { useState } from "react";
import "./inicioSesion.css";

function LoginForm({ onLogin }) {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Mueve esta línea dentro de la función
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
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>

      {error && <p className="error">{error}</p>}

      <div className="form-group">
        <label htmlFor="usuario">Usuario:</label>
        <input
          id="usuario"
          type="text"
          placeholder="Nombre del usuario"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <div className="password-wrapper">
          <input
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
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Cargando..." : "Iniciar Sesión"}
      </button>
    </form>
  );
}

export default LoginForm;
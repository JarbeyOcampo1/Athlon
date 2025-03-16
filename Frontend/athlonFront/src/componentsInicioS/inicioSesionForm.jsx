import { useState } from "react";

function LoginForm({ onLogin }) {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData = { nombreUsuario, password };
    onLogin(loginData);
    setNombreUsuario("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Usuario: </label>
        <input
          type="text"
          placeholder="Nombre del usuario"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Contraseña: </label>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Iniciar Sesión</button>
      </div>
    </form>
  );
}

export default LoginForm;

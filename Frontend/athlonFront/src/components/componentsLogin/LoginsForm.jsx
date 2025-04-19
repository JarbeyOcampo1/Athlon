import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./stylesLoginsForm.css";

function LoginsForm({ onSubmit, initialLogin }) {
  // Los estados para los datos
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [cargo, setCargo] = useState("");

  useEffect(() => {
    if (initialLogin) {
      setNombreUsuario(initialLogin.nombreUsuario);
      setPassword(initialLogin.password);
      setCargo(initialLogin.cargo);
    }
  }, [initialLogin]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const resData = { nombreUsuario, password, cargo };
    onSubmit(resData);
    setNombreUsuario("");
    setPassword("");
    setCargo("");
  };

  // Ingreso de los datos de login
  return (
    <form onSubmit={handleSubmit} id="logins-form" className="logins-form">
      <div className="form-group" id="form-group-usuario">
        <label htmlFor="input-usuario">Usuario: </label>
        <input
          type="text"
          id="input-usuario"
          className="input-usuario"
          placeholder="Nombre del usuario"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
          required
        />
      </div>
      <div className="form-group" id="form-group-password">
        <label htmlFor="input-password">Contraseña: </label>
        <input
          type="password"
          id="input-password"
          className="input-password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group" id="form-group-cargo">
        <label htmlFor="input-cargo">Cargo: </label>
        <input
          type="text"
          id="input-cargo"
          className="input-cargo"
          placeholder="Cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          required
        />
      </div>
      <div className="form-group" id="form-group-submit">
        <button type="submit" className="submit-button-logins">
          Registrar Usuario
        </button>
      </div>
    </form>
  );
}

export default LoginsForm;

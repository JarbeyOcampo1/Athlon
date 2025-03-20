import { Link } from "react-router-dom";
import logo from "../imagenes/logo.png";

function Plan() {
  return (
    <div>
      <div>
        <div className="Container_Major">
          <div className="logo-container">
            <img src={logo} alt="Logo Gimnasio Atlhon" className="principal-logo-image" />
          </div>
          <nav className="navbar">
            <Link to="/Client">Clientes</Link>
            <Link to="/">Principal </Link>
            <Link to="/Factura">Factura</Link>
          </nav>
        </div>
        </div>
      <h1>Plan</h1>
    </div>
  );
}

export default Plan;
import { Link } from "react-router-dom";
import logo from "../imagenes/logo.png";

function Factura () {
 return (
    <div>
        <div className="Container_Major">
            <div className="logo-container">
                <img src={logo} alt="Logo Gimnasio Atlhon" className="principal-logo-image" />
            </div>
            <nav className="navbar">
                <Link to="/Client">Clientes</Link>
                <Link to="/Plan">Planes</Link>
                <Link to="/">Principal </Link>
            </nav>
        </div>
    </div>
 );
}

export default Factura;
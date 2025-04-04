import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "../imagenes/logo.png";

function Factura () {

    const navigate = useNavigate(); 

    // Verifica si el token de autenticación existe en el almacenamiento local
    useEffect(() => {
        const autenticar = localStorage.getItem("Exito");
        if(!autenticar) {
        navigate("/"); 
        }
    },[navigate]);

    // Elimina el token de autenticación
    const handleLogout = () => {
        localStorage.removeItem("Exito");
        navigate("/"); 
    };

 return (
    <div>
        <div className="Container_Major">
            <div className="logo-container">
                <img src={logo} alt="Logo Gimnasio Atlhon" className="principal-logo-image" />
            </div>
            <nav className="navbar">
                <Link to="/Client">Clientes</Link>
                <Link to="/Plan">Planes</Link>
                <Link to="/Major">Principal </Link>
                <button onClick={handleLogout} className="logout-button">Salir</button>
            </nav>
        </div>
        <h1>Holaa</h1>
    </div>
 );
}

export default Factura;
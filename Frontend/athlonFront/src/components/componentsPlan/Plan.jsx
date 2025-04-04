import { Link , useNavigate} from "react-router-dom";
import { useEffect } from "react";
import logo from "../imagenes/logo.png";

function Plan() {

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
      <div>
        <div className="Container_Major">
          <div className="logo-container">
            <img src={logo} alt="Logo Gimnasio Atlhon" className="principal-logo-image" />
          </div>
          <nav className="navbar">
            <Link to="/Client">Clientes</Link>
            <Link to="/Major">Principal </Link>
            <Link to="/Factura">Factura</Link>
            <button onClick={handleLogout} className="logout-button">Salir</button>
          </nav>
        </div>
        </div>
      <h1>Plan</h1>
    </div>
  );
}

export default Plan;
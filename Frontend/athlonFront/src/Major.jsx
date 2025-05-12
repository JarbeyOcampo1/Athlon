import "./Major.css";
import { Link, useNavigate } from "react-router-dom";
import imagen1 from "./components/imagenes/imagen1.jpg";
import imagen2 from "./components/imagenes/imagen2.jpg";
import imagen3 from "./components/imagenes/imagen3.jpg";
import logo from "./components/imagenes/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useEffect } from "react";

function Major() {
  const navigate = useNavigate();

  // Verifica si el token de autenticación existe en el almacenamiento local
  useEffect(() => {
    const autenticar = localStorage.getItem("Exito");
    if (!autenticar) {
      navigate("/");
    }
  }, [navigate]);

  // Elimina el token de autenticación
  const handleLogout = () => {
    localStorage.removeItem("Exito");
    navigate("/");
  };

  return (
    <div>
      <div className="Container_Major">
        <div className="logo-container">
          <img
            src={logo}
            alt="Logo Gimnasio Atlhon"
            className="principal-logo-image"
            onClick={() => navigate("/Major")} // Navega a la página principal al hacer clic
            style={{ cursor: "pointer" }} // Cambia el cursor para indicar que es clickeable
          />
        </div>
        <nav className="navbar">
          <Link to="/Client">Clientes</Link>
          <Link to="/Plan">Planes</Link>
          <Link to="/Factura">Factura</Link>
          <button onClick={handleLogout} className="logout-button">
            Salir
          </button>
        </nav>
      </div>
      <div className="title-container">
        <h1 className="title">
          {" "}
          <span>G</span>
          <span>I</span>
          <span>M</span>
          <span>N</span>
          <span>A</span>
          <span>S</span>
          <span>I</span>
          <span>O</span>
          &nbsp;&nbsp;&nbsp;<span>A</span>
          <span>T</span>
          <span>H</span>
          <span>L</span>
          <span>O</span>
          <span>N</span>
        </h1>
      </div>
      <div className="carrousel">
        <div>
          <img src={imagen1} alt="imagen1" />
        </div>
        <div>
          <img src={imagen2} alt="imagen2" />
        </div>
        <div>
          <img src={imagen3} alt="imagen3" />
        </div>
        <div>
          <img src={imagen1} alt="imagen1" />
        </div>
        <div>
          <img src={imagen2} alt="imagen2" />
        </div>
        <div>
          <img src={imagen3} alt="imagen3" />
        </div>
        <div>
          <img src={imagen1} alt="imagen1" />
        </div>
        <div>
          <img src={imagen2} alt="imagen2" />
        </div>
        <div>
          <img src={imagen3} alt="imagen3" />
        </div>
        <div>
          <img src={imagen1} alt="imagen1" />
        </div>
        <div>
          <img src={imagen2} alt="imagen2" />
        </div>
        <div>
          <img src={imagen3} alt="imagen3" />
        </div>
      </div>
      <footer className="footer">
        <h2>Síguenos en nuestras redes sociales:</h2>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Major;

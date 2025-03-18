import "./Major.css";
import { Link } from "react-router-dom";
import imagen1 from "./imagenes/imagen1.jpg";
import imagen2 from "./imagenes/imagen2.jpg";
import imagen3 from "./imagenes/imagen3.jpg";
import logo from "./imagenes/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Major() {
  return (
    <div>
      <div className="Container_Major">
        <div className="logo-container">
        <img src={logo} alt="Logo Gimnasio Atlhon" className="principal-logo-image" />
        </div>
        <nav className="navbar">
          <Link to="/client">Clientes</Link>
          <Link to="/Plan">Planes</Link>
          <Link to="/Factura">Factura</Link>
        </nav>
      </div>
      <div className="title-container">
      <h1 className="title"> <span>G</span><span>I</span><span>M</span><span>N</span><span>A</span><span>S</span><span>I</span><span>O</span>
      &nbsp;&nbsp;&nbsp;<span>A</span><span>T</span><span>H</span><span>L</span><span>O</span><span >N</span></h1>
      </div>
      <div className="carrousel">
        <div><img src={imagen1}  alt="imagen1"/></div>
        <div><img src={imagen2} alt="imagen2"/></div>
        <div><img src={imagen3} alt="imagen3"/></div>
        <div><img src={imagen1}  alt="imagen1"/></div>
        <div><img src={imagen2} alt="imagen2"/></div>
        <div><img src={imagen3} alt="imagen3"/></div>
        <div><img src={imagen1}  alt="imagen1"/></div>
        <div><img src={imagen2} alt="imagen2"/></div>
        <div><img src={imagen3} alt="imagen3"/></div>
        <div><img src={imagen1}  alt="imagen1"/></div>
        <div><img src={imagen2} alt="imagen2"/></div>
        <div><img src={imagen3} alt="imagen3"/></div>
      </div>
      <footer className="footer">
        <h2>Síguenos en nuestras redes sociales:</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </footer>
    </div>
  );
}

export default Major;

import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ClientTable from "./ClientTable";
import ClientForm from "./ClientForm";

import "../componentsClient/styles.css";
import logo from "../imagenes/logo.png";


function Client () {

    const navigate = useNavigate(); 
    const [client, setClient] = useState([]);
    const [editingClient, setEditingClient] = useState(null);

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

    //actualizar cliente
    useEffect (() => {
        fetchClient ()
    },[]);

    //recorrer  y retonar clientes
    const fetchClient = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/clientes`);
            setClient(response.data);
            console.log(response.data);
        } catch (error) {
            console.log('Error a cargar clientes',error);
        }
    }

    //Crear actualizar
    const CreateOrUpdateClient = async (clientData) => {
        try {
            if (editingClient) {
                await axios.put(`http://localhost:8080/api/clientes/${editingClient.clienteID}`, clientData);
            } else {
                await axios.post(`http://localhost:8080/api/clientes`, clientData);
            }
            fetchClient();
            setEditingClient(null);
        } catch (error) {
            console.log('Error al crear o actualizar cliente',error);
        }
    }

    //editar
    const handleEditCLient = (client) => {
        setEditingClient(client);
    };

    //eliminar
    const handleDeleteClient = async (clienteID) => {
        try {
            await axios.delete(`http://localhost:8080/api/clientes/${clienteID}`);
            fetchClient();
        } catch (error) {
            console.log('Error al eliminar cliente',error);
        }
    }

    return ( 
        <div>
            <div className="Container_Major">
                <div className="logo-container">
                    <img src={logo} alt="Logo Gimnasio Atlhon" className="principal-logo-image" />
                </div>
                <nav className="navbar">
                    <Link to="/Major">Principal</Link>
                    <Link to="/Plan">Planes</Link>
                    <Link to="/Factura">Factura</Link>
                    <button onClick={handleLogout} className="logout-button">Salir</button>
                </nav>
            </div>
            <h1>Clientes</h1>
            <ClientTable clients={client} onEdit={handleEditCLient} onDelete={handleDeleteClient}/>
            <h3>{editingClient ? 'Editar Cliente' : 'Crear Cliente'}</h3>
            <ClientForm onSubmit={CreateOrUpdateClient} initialClient={editingClient}/>
        </div>
    );
}

export default Client;
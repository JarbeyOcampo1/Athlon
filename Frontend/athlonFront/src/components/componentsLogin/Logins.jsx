import axios from "axios";
import LoginsForm from "./LoginsForm";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import "./stylesLogins.css";

function Logins() {
    // Crear un estado para guardar los logins
    const [login, setLogin] = useState([]);

    // Actualiza por cada login nuevo
    useEffect(() => {
        fetchLogin();
    }, []);

    // Recorre una lista de logins y retorna una respuesta
    const fetchLogin = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/logins');
            setLogin(response.data);
        } catch (error) {
            console.log('Error a cargar los datos', error);
        }
    };

    // Crear un login
    const createLogin = async (loginData) => {
        try {
            await axios.post(`http://localhost:8080/api/logins`, loginData);
            await fetchLogin();
        } catch (error) {
            console.log('Error a crear un login', error);
        }
        fetchLogin();
    };

    return (
        <div id="logins-container" className="logins-container">
            <h1 id="logins-title">Crear un Usuario</h1>
            <br />
            <LoginsForm onSubmit={createLogin}/>
        </div>
    );
}

export default Logins;
import axios from "axios";
import LoginsForm from "./LoginsForm";
import { useState, useEffect } from "react";


function Logins () {

    //crear un estado para guardar los logins
    const [login, setLogin] = useState([]);
    
    //actualiza por cada login nuevo
    useEffect (() =>{
        fetchLogin();
    },[]);

    //recorre una lista  de logins y retorna una respuesta
    const fetchLogin = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/logins');
            setLogin(response.data);
        } catch (error) {
            console.log('Error a cargar los datos',error);
        }
    };

    //crear un login
    const createLogin = async (loginData) => {
        try {
            await axios.post(`http://localhost:8080/api/logins`,loginData)
            await fetchLogin();
        } catch (error) {
            console.log('Error a crear un login',error);
        }
        fetchLogin();
    };

    return (
        <div>
            <h1>Crear un Usuario</h1>
            <br />
            <LoginsForm onSubmit={createLogin}/>
        </div>
    );
}

export default Logins;
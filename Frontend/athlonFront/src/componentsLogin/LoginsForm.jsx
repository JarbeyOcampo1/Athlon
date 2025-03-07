import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LoginsForm ({onSubmit, initialLogin}) {

    //los estados para los datos
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [cargo, setCargo] = useState('');

    useEffect(() => {
        if(initialLogin) {
            setNombreUsuario(initialLogin.nombreUsuario);
            setPassword(initialLogin.password);
            setCargo(initialLogin.cargo);
        };
    },[initialLogin]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const resData = {nombreUsuario,password,cargo};
        onSubmit(resData);
        setNombreUsuario('');
        setPassword('');
        setCargo('');
    };
    //ingreso de los datos de login 
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Usuario: </label>
                <input type="text" className="" placeholder="Nombre del usuario" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} required/>
            </div>
            <div>
                <label>Contraseña: </label>
                <input type="password" className="" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <div>
                <label>Cargo: </label>
                <input type="text" className="" placeholder="Cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} required/>
            </div>
            <div>
                <button type="submit">Registrar Usuario</button>
            </div>

        </form>
    );
}

export default LoginsForm;
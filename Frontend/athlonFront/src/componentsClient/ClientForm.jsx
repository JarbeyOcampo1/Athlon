import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ClientForm ({onSubmit, initialClient}) {
    //estado para los datos
    const [nombreC, setNombreC] = useState('');
    const [apellidoC, setApellidoC] = useState('');
    const [email, setEmail] = useState('');
    const [fechaRegistro, setFechaRegistro] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');

    useEffect(() => {
        if (initialClient) {
            setNombreC(initialClient.nombreC);
            setApellidoC(initialClient.apellidoC);
            setEmail(initialClient.email);
            setFechaRegistro(initialClient.fechaRegistro);
            setFechaVencimiento(initialClient.fechaVencimiento);
        };
    },[initialClient]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const resData = {nombreC,apellidoC,email,fechaRegistro,fechaVencimiento};
        onSubmit(resData);
        setNombreC('');
        setApellidoC('');
        setEmail('');
        setFechaRegistro('');
        setFechaVencimiento('');
    };

    //ingreso de los datos del cliente
    return (
        <form>
            <div>
                <label>Nombres: </label>
                <input type="text" className='' placeholder='Nombres del cliente' value={nombreC} onChange={(e) => setNombreC(e.target.value)} required/>
            </div>
            <div>
                <label>Apellidos: </label>
                <input type="text" className='' placeholder='Apellidos del cliente' value={apellidoC} onChange={(e) => setApellidoC(e.target.value)} required/>
            </div>
            <div>
                <label>Email: </label>
                <input type="email" className='' placeholder='Email del cliente' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div>
                <label>Fecha de Registro: </label>
                <input type="time" className='' value={fechaRegistro} onChange={(e) => setFechaRegistro(e.target.value)} required/>
            </div>
            <div>
                <label>Fecha de Vencimiento: </label>
                <input type="time" className='' value={fechaVencimiento} onChange={(e) =>setFechaVencimiento(e.target.value)} required/>
            </div>
            <div>
                <button type='submit'>{initialClient ? 'Actualizar' : 'Guardar'}</button>
            </div>
        </form>
    );

}

export default ClientForm;
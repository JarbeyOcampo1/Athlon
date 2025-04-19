const ClientRow = ({client,onEdit,onDelete}) => {

    const handleEdit = () => {
        console.log('Editando cliente', client);
        onEdit(client);
    };

    const handleDelete = () => {
        console.log('Eliminando cliente', client.clienteID);
        onDelete(client.clienteID);
    };

    return (
        <tr className="client-row">
            <td>{client.nombreC}</td>
            <td>{client.apellidoC}</td>
            <td>{client.email}</td>
            <td>{client.fechaRegistro}</td>
            <td>{client.fechaVencimiento}</td>
            <td>
                <div>
                    <button onClick={handleEdit}> Editar </button>
                    <button onClick={handleDelete}> Eliminar </button>
                </div>
            </td>
        </tr>
    );
}

export default ClientRow;
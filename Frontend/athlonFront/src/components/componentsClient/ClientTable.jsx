import ClientRow from "./ClientRow";


function ClientTable({ clients, onEdit, onDelete }) {
  return (
    <div>
      <table className="client-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Fecha de Registro</th>
            <th>Fecha de Vencimiento</th>
          </tr>
        </thead>
        <tbody>
          {clients && clients.length > 0 ? (
            clients.map((client) => (
              <ClientRow
                key={client.clienteID}
                client={client}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan={"6"}>No hay clientes</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;

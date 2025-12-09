import React from "react";

export default function ContractList({ contracts, onEdit, onDelete }) {
  if (!contracts || contracts.length === 0)
    return <p>Nenhum contrato disponível.</p>;

  return (
    <div className="">
      <h2 className="">Lista de Contratos</h2>

      <table className="">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Cliente</th>
            <th className="border p-2">Valor</th>
            <th className="border p-2">Descrição</th>
            <th className="border p-2">Data</th>
            <th className="border p-2">Ações</th>
          </tr>
        </thead>

        <tbody>
          {contracts.map((c) => (
            <tr key={c.id} className="border">
              <td className="border p-2">{c.id}</td>
              <td className="border p-2">{c.cliente}</td>
              <td className="border p-2">R$ {c.valor}</td>
              <td className="border p-2">{c.descricao}</td>
              <td className="border p-2">
                {new Date(c.date).toLocaleDateString()}
              </td>

              <td className="border p-2 flex gap-2">
                <button
                  onClick={() => onEdit(c)}
                  className=""
                >
                  Editar
                </button>

                <button
                  onClick={() => onDelete(c.id)}
                  className=""
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

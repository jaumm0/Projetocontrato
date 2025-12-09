import React, { useEffect, useState } from "react";

export default function ContractForm({ onCreate, onUpdate, editing }) {
  const [cliente, setCliente] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  // quando mudar o contrato que está sendo editado
  useEffect(() => {
    if (editing) {
      setCliente(editing.cliente || "");
      setValor(editing.valor || "");
      setDescricao(editing.descricao || "");
    } else {
      setCliente("");
      setValor("");
      setDescricao("");
    }
  }, [editing]);

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      cliente,
      valor,
      descricao,
      date: new Date().toISOString(),
    };

    if (editing) {
      onUpdate(editing.id, data);
    } else {
      onCreate(data);
    }

    setCliente("");
    setValor("");
    setDescricao("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 border rounded mb-6">
      <h2 className="text-xl font-semibold">
        {editing ? "Editar Contrato" : "Novo Contrato"}
      </h2>

      <label>Cliente</label>
      <input
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <label>Valor</label>
      <input
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        type="number"
        className="border p-2 rounded"
        required
      />

      <label>Descrição</label>
      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="border p-2 rounded"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        {editing ? "Atualizar" : "Criar"}
      </button>
    </form>
  );
}

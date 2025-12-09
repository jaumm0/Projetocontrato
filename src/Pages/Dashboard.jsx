import React, { useEffect, useState } from "react";
import ContractList from "../Components/ContractList";
import ContractForm from "../Components/ContractForm";

import {
  getContracts,
  createContract,
  updateContract,
  deleteContract,
} from "../Services/api";

export default function Dashboard() {
  const [contracts, setContracts] = useState([]);
  const [editing, setEditing] = useState(null);

  // busca contratos ao carregar
  useEffect(() => {
    fetchContracts();
  }, []);

  async function fetchContracts() {
    const data = await getContracts();
    setContracts(data);
  }

  async function handleCreate(formData) {
    const saved = await createContract(formData);
    setContracts((prev) => [...prev, saved]);
  }

  async function handleUpdate(id, formData) {
    const updated = await updateContract(id, formData);
    setContracts((prev) =>
      prev.map((c) => (c.id === id ? updated : c))
    );
    setEditing(null);
  }

  async function handleDelete(id) {
    await deleteContract(id);
    setContracts((prev) => prev.filter((c) => c.id !== id));
  }

  function handleEdit(contract) {
    setEditing(contract);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestão de Contratos</h1>

      <ContractForm
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        editing={editing}
      />

      <ContractList
        contracts={contracts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

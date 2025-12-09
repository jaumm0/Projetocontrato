const BASE_URL = 'http://localhost:30001';

async function request (path, options ={}){
    const res = await fetch(`${BASE_URL}${path}`, options)
 
    if(!res.ok){
        const text = await res.text();
        throw new Error (` Erro ${res.status}:${text}`)

    }
    if(res.status ===204)
        return null;

    return res.json();


}   
// pega  todos os contratos
export const getContracts =() => request ('/contracts');
// cria umcontrato
export const createContract =(data) => request('/contracts',{
    method: 'POST',
    headers: {"Content-Type": "aplication/json"},
    body: JSON.stringify (data),
})
// atualiza um contrato
export const updateContract = (id,data) => request(`/contracts/${id}`,{
    method: "PUT",
    headers: {"Content-Type": "aplication/json"},
    body: JSON.stringify (data),
})
// deleta um contrato
export const deleteContract = (id) => request (`/contracts/${id}`,{
    method:  "DELETE",
})

export const getClints =() => request("/clients");

// cria um cliente
export const  createClient = (data) => request ("/clients",{
    method: "POST",
    headers: {"Content-Type": "aplication/json"},
    body: JSON.stringify (data),
})

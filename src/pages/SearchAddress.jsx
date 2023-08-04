import { useState } from 'react'
import Address from '../components/Address';


const fetchAddress = async (ent) => {
  const resposta = await fetch(`https://viacep.com.br/ws/${ent}/json/`);
  const saida = await resposta.json();
  console.log(saida)
  return saida
}

function SearchAddress() {

    const [busca, setBusca] = useState("")
    const [resultado, setResultado] = useState()

    const handleSearch = () => {
        fetchAddress(busca).then(result => setResultado(result))
    }

  return (
    <>
      <label htmlFor="entrada">CEP:</label>
      <input
        type="text"
        name="entrada"
        id="entrada"
        value={busca}
        onChange={(ev) => setBusca(ev.target.value)}
      />
      <button
        onClick={handleSearch}
      >
        BUSCAR
      </button>
      {resultado ? (
        <Address
          cep={resultado.cep}
          logradouro={resultado.logradouro}
          bairro={resultado.bairro}
          cidade={resultado.localidade}
          estado={resultado.uf}
        />
      ) : ""}
      
      
    </>
  );
}

export default SearchAddress;

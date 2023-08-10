import { useState } from "react";
import Address from "../components/Address";
import AddressTableRow from "../components/AddressTableRow";
// import Address from "../components/Address";

const fetchAddress = async (ent) => {
  const resposta = await fetch(`https://viacep.com.br/ws/${ent}/json/`);
  const saida = await resposta.json();
  console.log(saida);
  console.log(saida.erro)
  return saida;
};

function SearchAddress() {
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState();

  const handleSearch = (ev) => {
    ev.preventDefault();
    fetchAddress(busca).then((result) => setResultado(result));
  };

  return (
    <>
      <form onSubmit={handleSearch} className="searchAdd_form">
        <div>
          {/* <label htmlFor="entrada">CEP:</label> */}
          <input
            type="text"
            name="entrada"
            id="entrada"
            value={busca}
            placeholder="CEP"
            required
            onChange={(ev) => setBusca(ev.target.value)}
          />
        </div>
        <button type="submit">
          <img src="/icons8-search.svg" alt="lupa-de-busca" />
        </button>
      </form>
      {resultado ? (
        // <Address
        //   cep={resultado.cep}
        //   logradouro={resultado.logradouro}
        //   bairro={resultado.bairro}
        //   cidade={resultado.localidade}
        //   estado={resultado.uf}
        // />
        <Address >
          <AddressTableRow 
            cep={resultado.cep}
            estado={resultado.uf}
            cidade={resultado.localidade}
            bairro={resultado.bairro}
            logradouro={resultado.logradouro}
          />
        </Address>
      ) : (
        ""
      )}
    </>
  );
}

export default SearchAddress;

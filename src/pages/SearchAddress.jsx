import { useState } from "react";
import Address from "../components/Address";

const fetchAddress = async (ent) => {
  const resposta = await fetch(`https://viacep.com.br/ws/${ent}/json/`);
  const saida = await resposta.json();
  console.log(saida);
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
        <button type="submit">BUSCAR</button>
      </form>
      {resultado ? (
        <Address
          cep={resultado.cep}
          logradouro={resultado.logradouro}
          bairro={resultado.bairro}
          cidade={resultado.localidade}
          estado={resultado.uf}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default SearchAddress;

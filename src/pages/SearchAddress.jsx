import useAddress from "../hooks/useAddress.js";
import Address from "../components/Address";
import AddressTableRow from "../components/AddressTableRow";

function SearchAddress() {
  const { busca, setBusca, resultado, handleSearch } = useAddress();

  return (
    <>
      <form onSubmit={handleSearch} className="searchAdd_form">
        <input
          type="text"
          name="entrada"
          id="entrada"
          value={busca}
          placeholder="CEP"
          required
          onChange={(ev) => setBusca(ev.target.value)}
        />
        <button type="submit">
          <img src="/icons8-search.svg" alt="lupa-de-busca" />
        </button>
      </form>
      {resultado === "erro" ? (
        <p>CEP não encontrado!</p>
      ) : resultado ? (
        <Address>
          <AddressTableRow
            cep={resultado.cep}
            localidade={resultado.localidade + "/" + resultado.uf}
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
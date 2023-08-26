import Address from "../components/Address";
import AddressTableRow from "../components/AddressTableRow";
import useZipCode from "../hooks/useZipCode";

function SearchZipCode() {

  const { address, resultado, handleChange, handleSearch } = useZipCode()

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="searchZC_form"
      >
        <div>
          <label htmlFor="estado">Estado:</label>
          <select
           name="estado"
           value={address.estado}
           onChange={handleChange}
           required
          >
            <option value="">Selecione</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>

        <div>
          <label htmlFor="cidade">Cidade:</label>
          <input 
            type="text" 
            name="cidade"
            value={address.cidade}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="logradouro">Rua:</label>
          <input
           type="text" 
           name="logradouro"
           value={address.logradouro}
           onChange={handleChange}
           required
          />
        </div>

        <button
          type="submit"
        >
          <img src="/icons8-search.svg" alt="lupa-de-busca" />
        </button>
      </form>
      <div>
        {resultado === "none" || resultado == "error" ? (
          <p>Nenhum resultado encontrado!</p>
        ) : resultado ? (
          <Address>
            {resultado.map(result => (
              <AddressTableRow 
              key={result.cep}
              cep={result.cep}
              localidade={result.localidade + "/" + result.uf}
              bairro={result.bairro}
              logradouro={result.logradouro}
              />
            ))}
          </Address>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SearchZipCode
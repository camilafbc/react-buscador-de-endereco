import Address from "../components/Address";
import AddressTableRow from "../components/AddressTableRow";
import SearchZipCodeForm from "../components/SearchZipCodeForm/SearchZipCodeForm";
import useZipCode from "../hooks/useZipCode";

function SearchZipCode() {

  const {  resultado, handleChange, handleSearch } = useZipCode()

  const onSubmit = (data) => {
    console.log(data)
    handleSearch(data.estado, data.cidade, data.logradouro)
  }

  return (
    <div>
      <SearchZipCodeForm 
        onSubmit={onSubmit}
        onChange={handleChange}
      />
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
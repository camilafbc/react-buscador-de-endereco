import Address from "../components/Address";
import AddressTableRow from "../components/AddressTableRow";
import SearchZipCodeForm from "../components/SearchZipCodeForm/SearchZipCodeForm";
import useZipCode from "../hooks/useZipCode";

function SearchZipCode() {

  const {  result, handleChange, handleSearch } = useZipCode()

  const onSubmit = (data) => {
    handleSearch(data.estado, data.cidade, data.logradouro)
  }

  return (
    <>
      <SearchZipCodeForm 
        onSubmit={onSubmit}
        onChange={handleChange}
      />
      <div className="table_container">
        {result == "error" ? (
          <p>Nenhum resultado encontrado!</p>
        ) : result ? (
          <Address>
            {result.map(result => (
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
    </>
  );
}

export default SearchZipCode
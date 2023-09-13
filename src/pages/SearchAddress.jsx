import useAddress from "../hooks/useAddress.js";
import Address from "../components/Address";
import AddressTableRow from "../components/AddressTableRow";
import SearchAddressForm from "../components/SearchAddressForm/SearchAddressForm.jsx";

function SearchAddress() {
  
  const {  result, handleSearch } = useAddress();

  const onSubmit = (data) => {
    handleSearch(data.cep)
  }

  return (
    <>
      <SearchAddressForm
        onSubmit={onSubmit}
      /> 
      {result === "erro" ? (
        <p>CEP não encontrado!</p>
      ) : result ? (
       <div className="table_container">
         <Address>
            <AddressTableRow
              cep={result.cep}
              localidade={result.localidade + "/" + result.uf}
              bairro={result.bairro}
              logradouro={result.logradouro}
            />
          </Address>
       </div>
      ) : (
        ""
      )}
    </>
  );
}

export default SearchAddress;
import useAddress from "../hooks/useAddress.js";
import Address from "../components/Address";
import AddressTableRow from "../components/AddressTableRow";
import SearchAddressForm from "../components/SearchAddressForm/SearchAddressForm.jsx";

function SearchAddress() {
  
  const {  resultado, handleSearch } = useAddress();

  const onSubmit = (data) => {
    handleSearch(data.cep)
  }

  return (
    <>
      <SearchAddressForm
        onSubmit={onSubmit}
      />
      {resultado === "erro" ? (
        <p>CEP não encontrado!</p>
      ) : resultado ? (
       <div className="table_container">
         <Address>
            <AddressTableRow
              cep={resultado.cep}
              localidade={resultado.localidade + "/" + resultado.uf}
              bairro={resultado.bairro}
              logradouro={resultado.logradouro}
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
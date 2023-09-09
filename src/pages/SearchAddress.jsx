import useAddress from "../hooks/useAddress.js";
import Address from "../components/Address";
import AddressTableRow from "../components/AddressTableRow";
import { useForm } from "react-hook-form";

function SearchAddress() {
  
  const {  resultado, handleSearch } = useAddress();

  const { register, handleSubmit, formState: {errors} } = useForm()

  const onSubmit = (data) => {
    handleSearch(data.cep)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="searchAdd_form">
        <div className="form_group">
          <input
            type="text"
            placeholder="CEP"
            {...register("cep", {required: true, minLength: 8, pattern: /[0-9]/})}
          />
          {errors?.cep?.type === "required" && (
            <p>Campo obrigatório</p>
          )}
          {errors?.cep?.type === "minLength" && (
            <p>CEP deve conter 8 caracteres</p>
          )}
          {errors?.cep?.type === "pattern" && (
            <p>CEP deve conter apenas números</p>
          )}
        </div>
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
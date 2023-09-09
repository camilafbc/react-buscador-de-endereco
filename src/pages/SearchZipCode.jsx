import Address from "../components/Address";
import AddressTableRow from "../components/AddressTableRow";
import useZipCode from "../hooks/useZipCode";
import { useForm } from "react-hook-form";

function SearchZipCode() {

  const {  resultado, handleChange, handleSearch } = useZipCode()

  const { register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    console.log(data)
    handleSearch(data.estado, data.cidade, data.logradouro)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="searchZC_form">
        <div>
          <label htmlFor="estado">Estado:</label>
          <select
          //  name="estado"
          //  value={address.estado}
           onChange={handleChange}
          //  required
          {...register("estado", {
            required: true,
            validate: (value) => value != 0
          })}
          >
            <option value="0">Selecione</option>
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
          {errors?.estado?.type === "required" && (
            <span>Estado é obrigatório!</span>
          )}
          {errors?.estado?.type === "validate" && (
            <span>Estado não selecionado!</span>
          )}
        </div>

        <div>
          <label htmlFor="cidade">Cidade:</label>
          <div className="form_group">
            <input 
            className={errors?.cidade && "input-error"}
              type="text"
              {...register("cidade", {
                required: true,
                minLength: 3
              })}
            />
            {errors?.cidade?.type === "required" && (
              <span>Cidade é obrigatório!</span>
            )}
            {errors?.cidade?.type === "minLength" && (
              <span>Cidade deve conter mais de 3 caracteres!</span>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="logradouro">Rua:</label>
          <input
           type="text" 
          {...register("logradouro", {
            required: true,
            minLength: 3
          })}
          />
          {errors?.logradouro?.type === "required" && (
            <span>Logradouro é obrigatório!</span>
          )}
          {errors?.logradouro?.type === "minLength" && (
            <span>Logradouro deve conter mais de 3 caracteres!</span>
          )}
        </div>
        <button type="submit">
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
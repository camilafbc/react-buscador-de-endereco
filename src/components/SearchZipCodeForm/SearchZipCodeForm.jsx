/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import "./style.css";

function SearchZipCodeForm({ onSubmit, onChange }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="searchZC_form">
      <div>
        <label htmlFor="estado">Estado:</label>
        <div className="input_group">
          <select
            onChange={onChange}
            className={errors?.estado && "input-error"}
            {...register("estado", {
              required: true,
              validate: (value) => value != 0,
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
        
      </div>

      <div>
        <label htmlFor="cidade">Cidade:</label>
        <div className="input_group">
          <input
            className={errors?.cidade && "input-error"}
            type="text"
            {...register("cidade", {
              required: true,
              minLength: 3,
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
        <label htmlFor="logradouro">Logradouro:</label>
        <div className="input_group">
          <input
            className={errors?.logradouro && "input-error"}
            type="text"
            {...register("logradouro", {
              required: true,
              minLength: 3,
            })}
          />
          {errors?.logradouro?.type === "required" && (
            <span>Logradouro é obrigatório!</span>
          )}
          {errors?.logradouro?.type === "minLength" && (
            <span>Logradouro deve conter mais de 3 caracteres!</span>
          )}
        </div>
        
      </div>
      <button type="submit">
        <img src="/icons8-search.svg" alt="lupa-de-busca" />
      </button>
    </form>
  );
}

export default SearchZipCodeForm;

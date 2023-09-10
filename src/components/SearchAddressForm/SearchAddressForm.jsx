/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import "./style.css";

function SearchAddressForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="searchAdd_form">
      <div className="input_group">
        <input
          className={errors?.cep && "input-error"}
          type="text"
          placeholder="CEP"
          {...register("cep", {
            required: true,
            minLength: 8,
            pattern: /[0-9]/
          })}
        />
        {errors?.cep?.type === "required" && <span>Campo obrigatório</span>}
        {errors?.cep?.type === "minLength" && (
          <span>CEP deve conter 8 caracteres</span>
        )}
        {errors?.cep?.type === "pattern" && (
          <span>CEP deve conter apenas números</span>
        )}
      </div>
      <button type="submit">
        <img src="/icons8-search.svg" alt="lupa-de-busca" />
      </button>
    </form>
  );
}

export default SearchAddressForm;

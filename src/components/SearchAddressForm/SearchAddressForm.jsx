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
            pattern: /^\d{8}$/
          })}
        />
        {errors?.cep?.type === "required" && 
          <span>Campo obrigatório</span>
        }
        {errors?.cep?.type === "pattern" && (
          <span>CEP deve conter 8 caracteres numéricos</span>
        )}
      </div>
      <button type="submit">
        <img src="/icons8-search.svg" alt="lupa-de-busca" />
      </button>
    </form>
  );
}

export default SearchAddressForm;

import { useState } from "react";

const useAddress = () => {
 
  const [resultado, setResultado] = useState();

  // faz a requisição à API
  const fetchAddress = async (ent) => {
    const resposta = await fetch(`https://viacep.com.br/ws/${ent}/json/`);
    const saida = await resposta.json();
    return saida;
  };

  // trata a resposta da requisição
  const handleSearch = (entrada) => {
    fetchAddress(entrada)
      .then((result) => {
        if (result.erro) {
          setResultado("erro");
        } else {
          setResultado(result);
        }
      })
  };

  return {
    resultado,
    handleSearch,
  };
};

export default useAddress;
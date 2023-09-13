import { useState } from "react";

const useAddress = () => {
 
  const [result, setResult] = useState();

  // faz a requisição à API
  const fetchAddress = async (ent) => {
    const response = await fetch(`https://viacep.com.br/ws/${ent}/json/`);
    const data = await response.json();
    return data;
  };

  // trata a resposta da requisição
  const handleSearch = (entrada) => {
    fetchAddress(entrada)
      .then((result) => {
        if (result.erro) {
          setResult("erro");
        } else {
          setResult(result);
        }
      })
  };

  return {
    result,
    handleSearch,
  };
};

export default useAddress;
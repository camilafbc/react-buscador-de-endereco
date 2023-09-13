import { useState } from "react";

const useZipCode = () => {

  const [result, setResult] = useState();

  //   faz a requisição à API
  const fetchCEP = async (es, cd, rua) => {
    const response = await fetch(
      `https://viacep.com.br/ws/${es}/${cd}/${rua}/json/`
    );
    const data = await response.json();
    return data;
  };

  //   trata a resposta da requisição
  const handleSearch = (estado, cidade, rua) => {
    fetchCEP(
      estado,
      cidade.trim(),
      rua.trim()
    )
      .then((result) => {
        if (result.length === 0) {
          setResult("error");
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

export default useZipCode;
import { useState } from "react";

const useZipCode = () => {

  const [resultado, setResultado] = useState();

  //   faz a requisição à API
  const fetchCEP = async (es, cd, rua) => {
    const resposta = await fetch(
      `https://viacep.com.br/ws/${es}/${cd}/${rua}/json/`
    );
    const saida = await resposta.json();
    return saida;
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
          setResultado("error");
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

export default useZipCode;
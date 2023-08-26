import { useState } from "react";

const useZipCode = () => {

  const [address, setAddress] = useState({
    estado: "",
    cidade: "",
    logradouro: "",
  });

  const [resultado, setResultado] = useState();

//   faz a requisição à API
  const fetchCEP = async (es, cd, rua) => {
    const resposta = await fetch(
      `https://viacep.com.br/ws/${es}/${cd}/${rua}/json/`
    );
    const saida = await resposta.json();
    return saida;
  };

//   cuida da atualização dos eventos do formulário (seleção e preenchimento)
  const handleChange = (ev) => {
    setAddress((current) => ({
      ...current,
      [ev.target.name]: ev.target.value,
    }));
    // console.log(address)
  };

//   trata a resposta da requisição
  const handleSearch = (ev) => {
    ev.preventDefault();
    fetchCEP(
      address.estado,
      address.cidade,
      address.logradouro.trim().split(" ").join(" ")
    ).then((result) => {
      if (result.length === 0) {
        setResultado("none");
      } else {
        setResultado(result);
      }
    }).catch((error) => {
      setResultado("none")
      console.log(error)
    });
  };

    return {
        address,
        resultado,
        handleChange,
        handleSearch
    }

};

export default useZipCode
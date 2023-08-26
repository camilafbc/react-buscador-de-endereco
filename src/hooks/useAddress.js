import { useState } from "react";

const useAddress = () => {

    const [busca, setBusca] = useState("");
    const [resultado, setResultado] = useState();
   
    // faz a requisição à API
    const fetchAddress = async (ent) => {
        const resposta = await fetch(`https://viacep.com.br/ws/${ent}/json/`);
        const saida = await resposta.json();
        return saida;
   
    };

    // trata a resposta da requisição
    const handleSearch = (ev) => {
        ev.preventDefault();
        fetchAddress(busca).then((result) => {
          if(result.erro){
            setResultado("erro")
          } else {
          setResultado(result)}
        });
    };

    return {
        busca,
        setBusca,
        resultado,
        handleSearch
    }

}

export default useAddress
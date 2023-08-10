import { useState } from "react";
import Address from "../components/Address";
import AddressTableRow from "../components/AddressTableRow";

const fetchCEP = async (es, cd, rua) => {
  const resposta = await fetch(`https://viacep.com.br/ws/${es}/${cd}/${rua}/json/`);
  const saida = await resposta.json();
  // console.log(saida)
  return saida
}

function SearchZipCode() {

  // const [estado, setEstado] = useState("")
  // const [cidade, setCidade] = useState("")
  // const [logr, setLogr] = useState("")
  // trabalhando dessa forma abaixo eu economizo linhas de código e facilito a leitura do mesmo
  const [address, setAddress] = useState({
    estado: "",
    cidade: "",
    logradouro: ""
  })
  const [resultado, setResultado] = useState()

  const handleChange = (ev) => {
    setAddress((current) => ({ ...current, [ev.target.name]: ev.target.value }))
    console.log(address)
  }

  const handleSearch = (ev) => {
    ev.preventDefault()
    fetchCEP(address.estado, address.cidade, address.logradouro.trim().split(" ").join(" ")).then(result => setResultado(result))
  }

  // useEffect(() => {
  //   console.log(resultado);
  // }, [resultado]);

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="searchZC_form"
      >
        <div>
          <label htmlFor="estado">Estado:</label>
          <select
           name="estado"
           value={address.estado}
           onChange={handleChange}
           required
          >
            <option value="">Selecione</option>
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
        </div>

        <div>
          <label htmlFor="cidade">Cidade:</label>
          <input 
            type="text" 
            name="cidade"
            value={address.cidade}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="logradouro">Rua:</label>
          <input
           type="text" 
           name="logradouro"
           value={address.logradouro}
           onChange={handleChange}
           required
          />
        </div>

        <button
          type="submit"
        >
          <img src="/icons8-search.svg" alt="lupa-de-busca" />
        </button>
      </form>
      <div>
        {resultado ? (
          <>
          <Address>
            {resultado.map(result => (
              <AddressTableRow 
                cep={result.cep}
                estado={result.uf}
                cidade={result.localidade}
                bairro={result.bairro}
                logradouro={result.logradouro}
                key={result.cep}
              />
            ))}
          </Address>
            
          </>
        ) : "Nada Encontrado"}
      </div>
    </div>
  );
}

export default SearchZipCode;

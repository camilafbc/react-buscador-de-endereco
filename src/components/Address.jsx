import PropTypes from "prop-types";

Address.propTypes = {
  cep: PropTypes.string,
  logradouro: PropTypes.string,
  bairro: PropTypes.string,
  cidade: PropTypes.string,
  estado: PropTypes.string,
};

// const id = Math.floor(Math.random() * 100);

// eslint-disable-next-line react/prop-types
function Address({ children }) {
  return (
    // <>
    //   <div key={id} className="address">
    //     <p>CEP: {cep}</p>
    //     <p>Estado: {estado}</p>
    //     <p>Cidade: {cidade}</p>
    //     <p>Bairro: {bairro}</p>
    //     <p>Logradouro: {logradouro}</p>
    //   </div>
    //   <hr/>
    // </>
    <table>
          <thead>
            <tr>
              <th>CEP</th>
              <th>ESTADO</th>
              <th>Cidade</th>
              <th>Bairro</th>
              <th>LOGRADOURO</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>{resultado.cep}</td>
              <td>{resultado.uf}</td>
              <td>{resultado.localidade}</td>
              <td>{resultado.bairro}</td>
              <td>{resultado.logradouro}</td>
            </tr> */}
            {
              children
            }
          </tbody>
        </table>
  );
}

export default Address;

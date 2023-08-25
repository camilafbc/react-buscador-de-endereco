import PropTypes from "prop-types";

Address.propTypes = {
  children: PropTypes.ReactElement
};

function Address({ children }) {
  return (
    <table>
          <thead>
            <tr>
              <th>CEP</th>
              <th>Localidade</th>
              <th>Bairro</th>
              <th>LOGRADOURO</th>
            </tr>
          </thead>
          <tbody>
            {
              children
            }
          </tbody>
        </table>
  );
}

export default Address;

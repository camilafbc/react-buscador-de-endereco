/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";

// Address.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.element)
// };

function Address({ children }) {
  return (
    <table>
          <thead>
            <tr>
              <th>CEP</th>
              <th>Localidade</th>
              <th>Bairro</th>
              <th>Logradouro</th>
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

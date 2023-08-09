import PropTypes from "prop-types";

Address.propTypes = {
  cep: PropTypes.string,
  logradouro: PropTypes.string,
  bairro: PropTypes.string,
  cidade: PropTypes.string,
  estado: PropTypes.string,
};

const id = Math.floor(Math.random() * 100);

function Address({ cep, logradouro, bairro, cidade, estado }) {
  return (
    <>
      <div key={id} className="address">
        <p>CEP: {cep}</p>
        <p>Estado: {estado}</p>
        <p>Cidade: {cidade}</p>
        <p>Bairro: {bairro}</p>
        <p>Logradouro: {logradouro}</p>
      </div>
      <hr/>
    </>
  );
}

export default Address;

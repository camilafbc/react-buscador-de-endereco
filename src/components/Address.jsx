import PropTypes from "prop-types"

Address.propTypes = {
    cep: PropTypes.string,
    logradouro: PropTypes.string,
    bairro: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string
}

const id = Math.floor(Math.random() * 100)

function Address({ cep, logradouro, bairro, cidade, estado}) {
    return (
        <div key={id}>
            <p>CEP: {cep}</p>
            <p>Logradouro: {logradouro}</p>
            <p>Bairro: {bairro}</p>
            <p>Cidade: {cidade}</p>
            <p>Estado: {estado}</p>
        </div>
    )
}

export default Address
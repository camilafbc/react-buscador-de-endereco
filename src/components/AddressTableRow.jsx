// eslint-disable-next-line react/prop-types
function AddressTableRow({ cep, logradouro, bairro, localidade }) {
  return (
    <tr>
      <td>{cep}</td>
      <td>{localidade}</td>
      <td>{bairro}</td>
      <td>{logradouro}</td>
    </tr>
  );
}

export default AddressTableRow;

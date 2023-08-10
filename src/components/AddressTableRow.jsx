// eslint-disable-next-line react/prop-types
function AddressTableRow({cep, logradouro, bairro, cidade, estado }) {
  return (
    <tr>
      <td>{cep}</td>
      <td>{estado}</td>
      <td>{cidade}</td>
      <td>{bairro}</td>
      <td>{logradouro}</td>
    </tr>
  );
}

export default AddressTableRow;

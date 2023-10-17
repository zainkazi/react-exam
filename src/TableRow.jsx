const TableRow = ({ id, name, age, city, occupation }) => {
  return (
    <tr>
      <th>{id}</th>
      <th>{name}</th>
      <th>{age}</th>
      <th>{city}</th>
      <th>{occupation}</th>
    </tr>
  );
};

export default TableRow;

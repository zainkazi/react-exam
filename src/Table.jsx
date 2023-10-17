import TableRow from "./TableRow";

const Table = ({ data }) => {
  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Occupation</th>
      </tr>
      {data.map((p) => (
        <TableRow
          key={p.id}
          id={p.id}
          name={p.name}
          age={p.age}
          city={p.city}
          occupation={p.occupation}
        />
      ))}
    </table>
  );
};

export default Table;

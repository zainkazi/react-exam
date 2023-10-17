import { useEffect, useState } from "react";
import Table from "./Table";
import sampleData from "./data/data";

function App() {
  const [data, setData] = useState(sampleData);
  const [nameValue, setNameValue] = useState("");
  const [ageValue, setAgeValue] = useState(0);
  const [filteredData, setFilteredData] = useState(data);

  // useEffect(() => {
  // setFilteredData(data.filter((p) => p.age == ageValue));
  // }, [nameValue, ageValue]);

  const filterData = () => {
    setFilteredData(
      data.filter((p) => p.name.toLowerCase().includes(nameValue.toLowerCase()))
    );
  };

  const filterByName = (e) => {
    setNameValue(e.target.value);
  };

  const filterByAge = (e) => {
    setAgeValue(e.target.value);
  };

  const resetData = () => {};

  // console.log(sampleData);
  return (
    <div>
      {/* filters */}
      <label>Name</label>
      <input type="text" onChange={filterByName} value={nameValue} />

      <label>Age</label>
      <input type="number" onChange={filterByAge} value={ageValue} />

      <button onClick={filterData}>Search</button>

      <button onClick={resetData}>Reset</button>

      <Table data={filteredData} />
    </div>
  );
}

export default App;

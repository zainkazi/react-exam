import { useEffect, useState } from "react";
import Table from "./Table";
import sampleData from "./data/data";

function App() {
  const [data, setData] = useState(sampleData);
  const [nameValue, setNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [occupationValue, setOccupationValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // useEffect(() => {
  // setFilteredData(data.filter((p) => p.age == ageValue));
  // }, [nameValue, ageValue]);

  const filterData = () => {
    setFilteredData(
      data.filter(
        (p) =>
          p.name.toLowerCase().includes(nameValue.toLowerCase()) &&
          p.age.toString().includes(ageValue) &&
          p.city.includes(cityValue) &&
          p.occupation.includes(occupationValue)
      )
    );
  };

  const filterByName = (e) => {
    setNameValue(e.target.value);
  };

  const filterByAge = (e) => {
    setAgeValue(e.target.value);
  };

  const filterByCity = (e) => {
    setCityValue(e.target.value);
  };

  const filterByOccupation = (e) => {
    setOccupationValue(e.target.value);
  };

  const resetData = () => {};

  // console.log(sampleData);
  return (
    <div>
      {/* filters */}
      <label>Name</label>
      <input type="text" onChange={filterByName} value={nameValue} />

      <label>Age</label>
      <input type="text" onChange={filterByAge} value={ageValue} />

      <label>Select a City</label>
      <select name="city" onChange={filterByCity}>
        <option value=""></option>
        <option value="New York">New York</option>
        <option value="San Francisco">San Fransisco</option>
        <option value="Chicago">Chicage</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Houston">Houston</option>
        <option value="Miami">Miami</option>
        <option value="Seattle">Seattle</option>
        <option value="Boston">Boston</option>
        <option value="Denver">Denver</option>
        <option value="Atlanta">Atlanta</option>
      </select>

      <label>Select Occupation</label>
      <select name="occupation" onChange={filterByOccupation}>
        <option value=""></option>
        <option value="Engineer">Engineer</option>
        <option value="Designer">Designer</option>
        <option value="Accountant">Accountant</option>
        <option value="Teacher">Teacher</option>
        <option value="Doctor">Doctor</option>
        <option value="Artist">Artist</option>
        <option value="Softwar Eengineer">Software Engineer</option>
        <option value="Lawyer">Lawyer</option>
        <option value="Marketing Manager">Marketing Manager</option>
        <option value="Entrepreneur">Entrepreneur</option>
      </select>

      <button onClick={filterData}>Search</button>

      <button onClick={resetData}>Reset</button>

      <Table data={filteredData} />
    </div>
  );
}

export default App;

import { useState } from "react";
import Table from "./Table";
import sampleData from "./data/data";

function App() {
  const [data, setData] = useState(sampleData);
  console.log(sampleData);
  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default App;

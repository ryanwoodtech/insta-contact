import { useEffect } from "react";
import Dashboard from "./components/dashboard/Dashboard.js";

function App() {
  async function getApi() {
    const res = await fetch("http://localhost:5001/dashboard/organizations", {
      method: "get",
      mode: "cors",
    });
    const data = await res.json(res);
    console.log(data.message);
    return data;
  }

  useEffect(() => {
    const data = getApi();
  });

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;

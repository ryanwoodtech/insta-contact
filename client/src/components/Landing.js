import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Landing(props) {
  const { getAccessTokenSilently } = useAuth0();
  function callOpenApi() {
    fetch("http://localhost:5001/api").then((res) => console.log(res.text()));
  }
  async function callProtectedApi() {
    const token = await getAccessTokenSilently();
    const response = await fetch("http://localhost:5001/", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    // fetch("http://localhost:5001/");
  }
  return (
    <>
      <button onClick={props.onPress}>Login</button>
      <button onClick={callOpenApi}>Call Open API</button>
      <button onClick={callProtectedApi}>Call Protected API</button>
    </>
  );
}

export default Landing;

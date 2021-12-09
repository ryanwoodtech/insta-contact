import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Dashboard from "./components/dashboard/Dashboard.js";
import Landing from "./components/Landing.js";

function App() {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();

  const url = "http://localhost:5001/api";

  if (isLoading) {
    return <h2>LOADING...</h2>;
  }
  if (isAuthenticated) {
    fetch(url)
      .then((res) => res.text())
      .then((data) => console.log(data));
    return (
      <>
        <h3>User is logged in</h3>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <button onClick={logout}>Logout</button>
        <Landing onPress={loginWithRedirect} />
        <Dashboard />
      </>
    );
  }

  return <Landing onPress={loginWithRedirect} />;
}

export default App;

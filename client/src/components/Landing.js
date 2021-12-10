import React, { useState } from "react";

function Landing() {
  const signupUrl = "http://localhost:5001/signup";
  const loginUrl = "http://localhost:5001/login";

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);

  async function signup(e) {
    e.preventDefault();
    setSubmitting(true);
    console.log(`Client: signup pressed`);
    console.log(`Client: From values: ${JSON.stringify(values)}`);

    const response = await fetch(signupUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const text = await response.text();
    console.log(`Server: ${text}`);

    setSubmitting(false);
  }

  async function login(e) {
    e.preventDefault();
    setSubmitting(true);
    console.log("Client: login pressed");

    const response = await fetch(loginUrl);
    const text = await response.text();
    console.log(`Server: ${text}`);

    setSubmitting(false);
  }

  function handleInputChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
          value={values["email"]}
          placeholder="Email"
        ></input>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
          value={values["password"]}
          placeholder="Password"
        ></input>
        <button type="submit" onClick={signup}>
          Signup
        </button>
        <button type="submit" onClick={login}>
          Login
        </button>
      </form>
    </>
  );
}

export default Landing;

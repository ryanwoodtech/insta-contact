import React, {useState} from "react";

function Landing() {
  const signupUrl = "http://localhost:5001/signup";
  const loginUrl = "http://localhost:5001/login";

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  async function signup(e) {
    e.preventDefault();
    console.log("signup pressed");
    console.log("From values:", values);

    const response = await fetch(signupUrl, {
      method: "post",
    })
    const text = await response.text()
    console.log(text)
  }

  async function login(e) {
    e.preventDefault();
    console.log("login pressed");

    const response = await fetch(loginUrl)
    const text = await response.text()
    console.log(text)
  }

  function handleInputChange(e){
    console.log(e.target.value)
    setValues({
      ...values,
      [e.target.name]: e.target.value
    }
    )
  }

  return (
    <>
      <form>
        <input 
          type="email" 
          name="email" 
          id="email" 
          onChange={handleInputChange} 
          value={values['email']}
          placeholder="Email">
        </input>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
          value={values['password']}
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

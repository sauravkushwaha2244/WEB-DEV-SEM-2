import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {

    if (name.trim() === "") {
      alert("Name field cannot be empty");
      return;
    }

    if (email.trim() === "") {
      alert("Email field cannot be empty");
      return;
    }

    if (password.trim() === "") {
      alert("Password field cannot be empty");
      return;
    }

    alert("Registration Successful!");
  };

  return (
    <div className="container">

      <h1>Registration Form</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={registerUser}>
        Register
      </button>

      <hr />

      <h2>Entered Data</h2>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>

    </div>
  );
}
<h1>saurav kumar</h1>

export default App;
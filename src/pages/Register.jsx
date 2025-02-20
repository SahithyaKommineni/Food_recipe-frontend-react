import React, { useState } from "react";
import "../styles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered successfully as ${name}!`);
    // You can integrate backend registration here
  };

  return (
    <div className="form-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>

      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default Register;

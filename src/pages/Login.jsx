import React, { useState } from "react";
import "../styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in successfully with email: ${email}`);
    // You can integrate backend authentication here
  };

  return (
    <div className="form-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
};

export default Login;

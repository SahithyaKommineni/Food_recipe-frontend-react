import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Food Recipe</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/create-recipe">Create Recipe</Link>
        <Link to="/saved-recipes">Saved Recipes</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import "../styles.css";

const CreateRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [items, setItems] = useState("");
  const [timeRequired, setTimeRequired] = useState("");
  const [image, setImage] = useState(null);
  const [process, setProcess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Recipe "${recipeName}" posted successfully!`);
    // Here you can send the data to a backend or store it in local storage.
  };

  return (
    <div className="form-container">
      <h2>Create a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          required
        />
        
        <textarea
          placeholder="List of items used (separate by commas)"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Time required (e.g., 30 minutes)"
          value={timeRequired}
          onChange={(e) => setTimeRequired(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <textarea
          placeholder="Process to cook the recipe"
          value={process}
          onChange={(e) => setProcess(e.target.value)}
          required
        />

        <button type="submit">Post Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;

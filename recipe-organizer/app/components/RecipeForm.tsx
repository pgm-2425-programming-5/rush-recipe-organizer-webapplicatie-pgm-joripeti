"use client";

import { useState } from 'react';

interface Recipe {
  name: string;
  ingredients: string;
  instructions: string;
  category: string;
}

interface RecipeFormProps {
  addRecipe: (recipe: Recipe) => void;
}

const RecipeForm = ({ addRecipe }: RecipeFormProps) => {
  const [recipe, setRecipe] = useState<Recipe>({
    name: '',
    ingredients: '',
    instructions: '',
    category: 'Ontbijt',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addRecipe(recipe); // Call the function passed from the parent
    setRecipe({ name: '', ingredients: '', instructions: '', category: 'Ontbijt' });
    alert('Recept toegevoegd!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Gerechtnaam</label>
        <input type="text" name="name" value={recipe.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Ingrediënten</label>
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
      </div>
      <div>
        <label>Instructies</label>
        <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required />
      </div>
      <div>
        <label>Categorie</label>
        <select name="category" value={recipe.category} onChange={handleChange}>
          <option value="Ontbijt">Ontbijt</option>
          <option value="Lunch">Lunch</option>
          <option value="Diner">Diner</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <button type="submit">Recept Toevoegen</button>
    </form>
  );
};

export default RecipeForm;

"use client"

import { useEffect, useState } from 'react';
import RecipeForm from '@/app/components/RecipeForm';
import RecipeList from '@/app/components/RecipeList';

interface Recipe {
  name: string;
  ingredients: string;
  instructions: string;
  category: string;
}

export default function ReceptenPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  // Load recipes from local storage when the page is first rendered
  useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  // Function to add a new recipe and update local storage
  const addRecipe = (newRecipe: Recipe) => {
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  return (
    <main>
      <h1>Recepten Beheren</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </main>
  );
}

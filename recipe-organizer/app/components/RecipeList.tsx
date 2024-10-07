interface Recipe {
  name: string;
  ingredients: string;
  instructions: string;
  category: string;
}

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  const handleDelete = (index: number) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    // As we passed the recipes prop, deletion should be handled at the parent level
    window.location.reload(); // Temporarily reload to reflect changes (you can refactor this to lift state as well)
  };

  return (
    <div>
      <h2>Mijn Recepten</h2>
      {recipes.length === 0 ? (
        <p>Geen recepten toegevoegd</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h3>{recipe.name}</h3>
              <p><strong>Ingrediënten:</strong> {recipe.ingredients}</p>
              <p><strong>Instructies:</strong> {recipe.instructions}</p>
              <p><strong>Categorie:</strong> {recipe.category}</p>
              <button onClick={() => handleDelete(index)}>Verwijderen</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;

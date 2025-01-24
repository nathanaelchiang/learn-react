export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function IngredientItemlist({ ingredient }: { ingredient: string }) {
  return <li>{ingredient}</li>;
}

function RecipeDiv({ name, ingredients }: { name: string; ingredients: Set<string> }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {[...ingredients].map((ingredient) => (
          <IngredientItemlist key={ingredient} ingredient={ingredient} />
        ))}
      </ul>
    </div>
  );
}

// RecipeList component to render all recipes
export default function RecipeList() {
  const recipeDivList = recipes.map((recipe) => (
    <RecipeDiv key={recipe.id} name={recipe.name} ingredients={recipe.ingredients} />
  ));

  return (
    <div>
      <h1>Recipes</h1>
      {recipeDivList}
    </div>
  );
}
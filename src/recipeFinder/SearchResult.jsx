import { useContext, useState, useEffect } from "react";
import { SearchTextContext } from "./App";
import Card from "./Card";


const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY; // API key for fetching data form spoonacular api


function SearchResult() {

  // Access the search text from the context
  const { searchText } = useContext(SearchTextContext);

  // State variables  for managing recipes, loading and errors
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch recipes when searchText changes
  useEffect(() => {
    // Async function to fetch recipes from an API
    const fetchRecipes = async () => {
      // Only if there is a search text
      if (searchText == "") return;
      if (searchText) {
        setLoading(true); // Set loading to true before starting the fetch

        const url = `https://api.spoonacular.com/recipes/complexSearch?query=${searchText}&apiKey=${apiKey}`;

        try {
          // Perform the API request to get the recipes
          const response = await fetch(url);

          if (!response.ok) throw new Error ('Network response was not ok');

          const data = await response.json();
          setRecipes(data.results); // Update state with the fetched recipes

        } catch (error) {
          setError(error); // Set error if fetching fails
        } finally {
          setLoading(false); // Set laoding to false after fetching completes
        }
      }
    };

    fetchRecipes(); // Call the fetch recipe function
  },[searchText]); // Runs the effect when search text changes

  // Render based on the state
  if(loading) return <p className="text-green-800 text-[2rem] font-semibold">Loading...</p>; // Show the laoding message
  if(error) return <p className="text-red-600 font-semibold text-[2rem] text-center">Error: {error.message}</p> // Show error message

  // Filter recipes to include only those with an image
  const filteredRecipes = recipes.filter(recipe => recipe.image);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

        {/* Conditional rendering: Render the card when there is a search result */}
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
              <Card
                key={recipe.id}
                image={recipe.image}
                name={recipe.title}
                description={recipe.summary ? recipe.summary.slice(0, 10) + '...' : 'No description availble'}
                detailsUrl={`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`}
            />
          ))
          
        ) : (
          <>
            <p className="font-extrabold text-[25px] sm:text-[34px] text-center">No result found for your search.</p>
            <p className="font-semibold text-[20px] sm:text-[22px] text-center">Please try another search team.</p>
          </>
        )}
    </div>
  );
}

export default SearchResult

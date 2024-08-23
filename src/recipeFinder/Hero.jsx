import { useState, useEffect } from "react"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Hero() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY; // API key for fetching data form spoonacular api
      const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        setRecipes(data.recipes); // Set recipes to an array of the search results(recipes)
      } catch (error) {
        console.error(`Error fetching random recipes:`, error);
      }
    };

    fetchRecipes();
  },[]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  // Include only recipes with images
  const filteredRecipes = recipes.filter(recipe => recipe.image)
  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {filteredRecipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="flex flex-row justify-center align-center h-[400px] text-center text-white"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="-z-10 object-contain w-full h-auto"
            />
            <div
            className="z-20 relative max-w-[600px] p-5 bg-transparent text-center mx-auto" 
            >
              <h2 className="font-bold text-[2rem]">{recipe.title}</h2>
              <p className="font-semibold text-[1.2rem]">
                {/* {recipe.summary ? recipe.summary.replace(0, 10 + "...") : "😋😋"} */}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero

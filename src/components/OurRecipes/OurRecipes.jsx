/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import RecipeDashboard from '../RecipeDashboard/RecipeDashboard';

const OurRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch(`items.json`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className='max-w-screen-xl mx-auto mb-10'>
            <div className="text-center space-y-4 py-5 mb-10">
                <h1 className="text-4xl font-bold">Our Recipes</h1>
                <p className="mx-auto md:mx-[20%]">
                    Explore a diverse collection of delicious recipes with detailed nutritional information. Find healthy, easy-to-make dishes tailored to your dietary preferences and needs.
                </p>
            </div>


            <div className='990:flex'>
                <div className='990:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-2 mr-2'>
                    {recipes.map((recipe, index) => (
                        <RecipeCard key={index} recipe={recipe} />
                    ))}
                </div>
                {/* <RecipeCard className='w-2/3'></RecipeCard> */}
                <div className='990:w-1/3'>
                    <RecipeDashboard ></RecipeDashboard>

                </div>
            </div>
        </div>
    );
};

export default OurRecipes;
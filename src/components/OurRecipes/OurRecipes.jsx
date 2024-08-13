/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import OrderDashboard from '../OrderDashboard/OrderDashboard';

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
                <p className="mx-[5%] sm:mx-[10%] md:mx-[20%]">
                    Explore a diverse collection of delicious recipes with detailed nutritional information. Find healthy, easy-to-make dishes tailored to your dietary preferences and needs.
                </p>
            </div>

            <div className='990:flex p-2'>
                <div className='990:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-2 990:mr-2 mb-2'>
                    {recipes.map((recipe, index) => (
                        <RecipeCard key={index} recipe={recipe} />
                    ))}
                </div>
                
                <div className='990:w-1/3'>
                    <OrderDashboard />
                </div>
            </div>
        </div>
    );
};

export default OurRecipes;
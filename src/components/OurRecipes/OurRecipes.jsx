/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import OrderDashboard from '../OrderDashboard/OrderDashboard';
import { Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OurRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch(`items.json`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])


    const [orders, setOrders] = useState([]);
    const wantToCook = (id) => {
        const exists = orders.find(order => order.recipe_id === id);

        if (!exists) {
            // If it doesn't exist, find the recipe and add it to orders
            const recipe = recipes.find(r => id === r.recipe_id);
            if (recipe) {
                const newOrder = {
                    recipe_id: recipe.recipe_id,
                    recipe_name: recipe.recipe_name,
                    preparing_time: recipe.preparing_time,
                    calories: recipe.calories
                };
                setOrders([...orders, newOrder]);
            }
        } else {
            toast.error("This item already added...");
        }
    };

    return (
        <div className='max-w-screen-xl mx-auto mb-10'>
            <div className="text-center space-y-4 py-5 mb-10">
                <h1 className="text-4xl font-bold">Our Recipes</h1>
                <p className="mx-[5%] sm:mx-[10%] md:mx-[20%]">
                    Explore a diverse collection of delicious recipes with detailed nutritional information. Find healthy, easy-to-make dishes tailored to your dietary preferences and needs.
                </p>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition:Slide
            />

            <div className='990:flex p-2'>
                <div className='990:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-2 990:mr-2 mb-2'>
                    {recipes.map((recipe, index) => (
                        <RecipeCard key={index} recipe={recipe} wantToCook={wantToCook} />
                    ))}
                </div>

                <div className='990:w-1/3'>
                    <OrderDashboard orders={orders} ordered={orders}/>
                </div>
            </div>
        </div>
    );
};

export default OurRecipes;
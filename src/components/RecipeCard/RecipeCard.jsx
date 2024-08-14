/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { IoIosTimer } from 'react-icons/io';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';

const RecipeCard = ({ recipe, wantToCook }) => {
    const { recipe_id,
        recipe_image,
        recipe_name,
        short_description,
        ingredients,
        preparing_time,
        calories } = recipe;
    // console.log(ingredients.length);
    return (
        <div>
            <div className="p-4 rounded-lg border bg-white h-full">
                <div className="flex justify-center items-center">
                    <img className="rounded-md h-60 mb-3" src={recipe_image} alt={recipe_name} />
                </div>
                <h2 className="text-xl font-bold mb-2">{recipe_name}</h2>
                <p className="text-gray-600 mb-3">{short_description}</p>
                <div className="text-sm text-gray-600 mb-3 border-y py-3">
                    <strong>Ingredients: {ingredients.length}</strong>
                    <ul className="list-disc ml-5">
                        {recipe?.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-between items-center mb-3">
                    <span className="flex items-center">
                        <IoIosTimer />
                        {preparing_time} minutes
                    </span>
                    <span className="flex items-center">
                        <MdOutlineLocalFireDepartment/>
                        {calories} calories
                    </span>
                </div>
                <button onClick={()=>wantToCook(recipe_id, recipe)} className=" bg-green-500 p-2 px-4 font-semibold rounded-full">
                    Want to Cook
                </button>
            </div>
        </div>
    );
};

RecipeCard.propTypes = {
    recipe: PropTypes.object.isRequired,
    wantToCook: PropTypes.func.isRequired,
}

export default RecipeCard;
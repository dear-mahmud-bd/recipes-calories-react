/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const OrderDashboard = ({ wantCook, setWantCook }) => {
    const [cooking, setCooking] = useState([]);

    const handlePrepating = (id) => {
        const prepating = wantCook.find(order => order.recipe_id === id);
        setCooking([...cooking, prepating]);
        const restItems = wantCook.filter(order => order.recipe_id !== id);
        setWantCook(restItems);
    };

    const totalTime = cooking.reduce((accumulator, recipe) => accumulator + recipe.preparing_time, 0);
    const totalCalories = cooking.reduce((accumulator, recipe) => accumulator + recipe.calories, 0);

    return (
        <div className=' border-2 rounded-lg'>
            <h2 className="text-2xl font-bold text-center border-b pb-5 my-4 w-10/12 mx-auto">Want to cook: {wantCook.length}</h2>
            <table className="bg-white rounded-lg w-full mb-10">
                <thead className='text-gray-600'>
                    <tr className="w-full flex justify-between">
                        <th className="py-2 flex-1 text-left "></th>
                        <th className="py-2 flex-1 text-left ">Name</th>
                        <th className="py-2 flex-1 text-left ">Time</th>
                        <th className="py-2 flex-1 text-left ">Calories</th>
                        <th className="py-2 flex-1 text-left "></th>
                    </tr>
                </thead>
                <tbody className="text-sm w-full">
                    {wantCook.map((item, idx) => (
                        <tr key={idx} className="w-full flex justify-between bg-gray-100">
                            <td className="py-2 flex-1 text-center">{idx + 1}</td>
                            <td className="py-2 flex-1">{item.recipe_name}</td>
                            <td className="py-2 flex-1">{item.preparing_time} minutes</td>
                            <td className="py-2 flex-1">{item.calories} calories</td>
                            <td className="py-2 flex-1">
                                <button onClick={() => handlePrepating(item.recipe_id)} className="bg-green-500 text-white px-2 py-1 rounded-full hover:bg-green-600">
                                    Preparing
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <h2 className="text-2xl font-bold text-center border-b pb-5 my-4 w-10/12 mx-auto">Currently cooking: {cooking.length}</h2>
            <table className="bg-white rounded-lg w-full mb-10">
                <thead className='text-gray-600'>
                    <tr className="w-full flex justify-between">
                        <th className="py-2 flex-1 text-left "></th>
                        <th className="py-2 flex-1 text-left ">Name</th>
                        <th className="py-2 flex-1 text-left ">Time</th>
                        <th className="py-2 flex-1 text-left ">Calories</th>
                    </tr>
                </thead>
                <tbody className="text-sm w-full">
                    {cooking.map((item, idx) => (
                        <tr key={idx} className="w-full flex justify-between bg-gray-100">
                            <td className="py-2 flex-1 text-center">{idx + 1}</td>
                            <td className="py-2 flex-1">{item.recipe_name}</td>
                            <td className="py-2 flex-1">{item.preparing_time} minutes</td>
                            <td className="py-2 flex-1">{item.calories} calories</td>
                        </tr>
                    ))}
                    <tr className="w-full flex justify-between ">
                        <td className="py-2 flex-1"> </td>
                        <td className="py-2 flex-1"> Total: </td>
                        <td className="py-2 flex-1"> {totalTime} minutes</td>
                        <td className="py-2 flex-1"> {totalCalories} calories</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

OrderDashboard.propTypes = {
    wantCook: PropTypes.array.isRequired,
    setWantCook: PropTypes.func.isRequired,
}

export default OrderDashboard;
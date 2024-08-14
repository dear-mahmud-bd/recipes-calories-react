/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const OrderDashboard = ({ orders, ordered }) => {
    // const { recipe_name, preparing_time, calories } = orders;
    console.log(ordered);

    const [prepare, setPrepare] = useState([]);
    

    const data = [
        { id: 1, time: 30, name: "Apple", calories: 52 },
        { id: 2, time: 45, name: "Banana", calories: 96 },
        { id: 3, time: 90, name: "Orange", calories: 43 },
    ];

    return (
        <div className=' border-2 rounded-lg'>
            <h2 className="text-2xl font-bold text-center border-b pb-5 my-4 w-10/12 mx-auto">Want to cook: {orders.length}</h2>
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
                    {orders.map((item, idx) => (
                        <tr key={idx} className="w-full flex justify-between bg-gray-100">
                            <td className="py-2 flex-1 text-center">{idx + 1}</td>
                            <td className="py-2 flex-1">{item.recipe_name}</td>
                            <td className="py-2 flex-1">{item.preparing_time} minutes</td>
                            <td className="py-2 flex-1">{item.calories} calories</td>
                            <td className="py-2 flex-1">
                                <button className="bg-green-500 text-white px-2 py-1 rounded-full hover:bg-green-600">
                                    Preparing
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <h2 className="text-2xl font-bold text-center border-b pb-5 my-4 w-10/12 mx-auto">Currently cooking: 02</h2>
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
                    {data.map((item, idx) => (
                        <tr key={idx} className="w-full flex justify-between bg-gray-100">
                            <td className="py-2 flex-1 text-center">{idx + 1}</td>
                            <td className="py-2 flex-1">{item.name}</td>
                            <td className="py-2 flex-1">{item.time} minutes</td>
                            <td className="py-2 flex-1">{item.calories} calories</td>
                        </tr>
                    ))}
                    <tr className="w-full flex justify-between ">
                        <td className="py-2 flex-1"></td>
                        <td className="py-2 flex-1"></td>
                        <td className="py-2 flex-1"> 165 minutes</td>
                        <td className="py-2 flex-1"> 191 calories</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

OrderDashboard.propTypes = {
    orders: PropTypes.array.isRequired,
    ordered: PropTypes.array.isRequired,
}

export default OrderDashboard;
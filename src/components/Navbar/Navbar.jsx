/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        // if clicked was outside of the dropdown or button
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        // detect if clicks outside the dropdown
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <nav className="flex justify-between items-center px-8 py-4 max-w-screen-xl mx-auto">
                <div className="text-2xl font-bold text-gray-800">
                    Recipes Calories
                </div>
                <div className="hidden md:flex 895:ml-28 space-x-8">
                    <a href="#" className="text-lg text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#" className="text-lg text-gray-600 hover:text-gray-900">Recipes</a>
                    <a href="#" className="text-lg text-gray-600 hover:text-gray-900">About</a>
                </div>
                <div className="flex items-center space-x-2 relative">
                    <div className="hidden xsm:flex items-center bg-gray-100 rounded-full px-4 py-2">
                        <FiSearch className="text-gray-400 mr-1" size={20} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-100 outline-none text-gray-600 w-full"
                        />
                    </div>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="p-2 rounded-full bg-green-300 h-10 w-10 focus:outline-none"
                        >
                            <FaRegUserCircle className='text-2xl' />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 p-2 w-48 bg-gray-200 rounded-md shadow-lg z-10">
                                <div className='md:hidden'>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Recipe</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>
                                </div>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                                <div className="xsm:hidden flex items-center bg-gray-100 rounded-full px-4 py-2 my-1">
                                    <FiSearch className="text-gray-400 mr-1" />
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="bg-gray-100 outline-none text-gray-600 w-full"
                                    />
                                </div>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

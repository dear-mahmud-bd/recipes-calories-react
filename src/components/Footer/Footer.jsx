/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Company</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">Careers</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">Press</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Products</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">Pricing</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">Features</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">Integrations</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Support</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">Help Center</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">Community</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center border-t-2 border-gray-500 mt-5 pt-5">
                    <h3 className="text-xl font-semibold mb-4">Social</h3>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="hover:text-gray-400"> <FaFacebook className="text-2xl" /> </a>
                        <a href="#" className="hover:text-gray-400"> <FaLinkedin className="text-2xl" /> </a>
                        <a href="#" className="hover:text-gray-400"> <FaGithub className="text-2xl" /> </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-400">
                    © 2024 Recipes Calories - All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

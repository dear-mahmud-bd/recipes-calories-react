/* eslint-disable no-unused-vars */
import React from 'react';
import BannerImage from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto rounded-3xl overflow-hidden mb-10">
            <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Reveal the calories in your Recipes!
                    </h1>
                    <p className="text-white text-lg sm:text-xl max-w-2xl mb-8">
                        Access comprehensive nutritional information and calorie counts for a wide range of Recipess. Make informed dietary choices and track your health goals effortlessly.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="px-8 py-4 bg-green-500 text-lg font-bold rounded-full hover:text-white hover:bg-green-600">
                            Explore Now
                        </a>
                        <a href="#" className="px-8 py-4 text-white border-2 text-lg font-bold rounded-full hover:text-green-600 hover:border-green-600">
                            Our Feedback
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
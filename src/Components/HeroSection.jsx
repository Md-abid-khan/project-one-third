import React from 'react';
import jobGenie from "../assets/download (1).png"

const HeroSection = () => {
    return (

        <section className="bg-indigo-600 text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold mb-5">
                        Find Your Dream Job Faster 🚀
                    </h1>
                    <p className="text-lg mb-6">
                        Browse top companies, explore job openings, and apply easily — all in one platform.
                    </p>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold">
                        Get Started
                    </button>
                </div>
                <div className="md:w-1/2">
                    <img src={jobGenie} alt="Job Search" className="w-full rounded-4xl" />
                </div>
            </div>
        </section>

    );
};

export default HeroSection;
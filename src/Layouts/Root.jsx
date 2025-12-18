import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import CompanySection from "../Components/CompanySection";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";


const HomePage = () => {

    return (
        <div className="font-inter text-gray-800">
            <Helmet>
                <title>Company Intro | Home</title>
            </Helmet>
            <Header></Header>

          
            <HeroSection></HeroSection>

           
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-white shadow-md p-6 rounded-lg">
                            <h3 className="font-semibold mb-2">Browse Companies</h3>
                            <p>Explore verified companies and their profiles.</p>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-lg">
                            <h3 className="font-semibold mb-2">View Jobs</h3>
                            <p>Check available jobs with details like salary & location.</p>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-lg">
                            <h3 className="font-semibold mb-2">Apply Easily</h3>
                            <p>Apply directly using the provided links.</p>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-lg">
                            <h3 className="font-semibold mb-2">Track Progress</h3>
                            <p>Keep track of your applied jobs.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-10">
                <CompanySection></CompanySection>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default HomePage;

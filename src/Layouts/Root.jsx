import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import CompanySection from "../Components/CompanySection";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

// Example JSON for companies
const companies = [
    { id: 1, name: "Google", logo: "/logos/google.png" },
    { id: 2, name: "Amazon", logo: "/logos/amazon.png" },
    { id: 3, name: "Microsoft", logo: "/logos/microsoft.png" },
    { id: 4, name: "Facebook", logo: "/logos/facebook.png" },
    { id: 5, name: "Apple", logo: "/logos/apple.png" },
];

const featuredJobs = [
    { id: 1, title: "Frontend Developer", company: "Google", location: "Remote" },
    { id: 2, title: "Backend Developer", company: "Amazon", location: "Seattle" },
    { id: 3, title: "UI/UX Designer", company: "Microsoft", location: "NYC" },
    { id: 4, title: "Fullstack Developer", company: "Facebook", location: "Remote" },
];

const HomePage = () => {
    return (
        <div className="font-inter text-gray-800">
            <Header></Header>

            {/* 1️⃣ Hero Section */}
            <HeroSection></HeroSection>

            {/* 2️⃣ How It Works Section */}
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

            {/* 3️⃣ Companies Section */}
            {/* <section className="py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10">Our Companies</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                        {companies.map((company) => (
                            <a
                                key={company.id}
                                href={`/company/${company.id}`}
                                className="p-4 bg-white shadow-md rounded-lg flex justify-center items-center hover:scale-105 transition-transform"
                            >
                                <img src={company.logo} alt={company.name} className="h-16" />
                            </a>
                        ))}
                    </div>
                </div>
            </section> */}
            <CompanySection></CompanySection>
            <Outlet></Outlet>

            {/* 4️⃣ Featured Jobs Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10">Featured Jobs</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {featuredJobs.map((job) => (
                            <div key={job.id} className="bg-white shadow-md p-6 rounded-lg">
                                <h3 className="font-semibold mb-2">{job.title}</h3>
                                <p className="text-sm mb-1">{job.company}</p>
                                <p className="text-sm text-gray-500 mb-3">{job.location}</p>
                                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                                    Apply
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* footer*/}
            <Footer></Footer>

        </div>
    );
};

export default HomePage;

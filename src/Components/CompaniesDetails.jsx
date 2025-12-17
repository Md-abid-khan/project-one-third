import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Jobs from './Jobs';
import Header from './Header';
import Footer from './Footer';


// const fetchCompanyData = fetch("/companyDetails.json")
//     .then((res) => res.json());

const CompaniesDetails = () => {
    // const [selectedCompanies, setSelectedCompanies] = useState([]);
    const { id } = useParams()
    const compData = useLoaderData()
    console.log({ compData });

    const selectedCompany = compData.find(comp => comp.id == id)
    // console.log({ selectedCompany });


    return (
        <div>
            <Header></Header>
            <div className='flex justify-around items-center p-10'>
                <div className='space-y-3'>
                    <h1 className='font-bold text-2xl'>{selectedCompany.name}</h1>
                    <h1 className='font-semibold text-xl'>{selectedCompany.industry}</h1>
                    <h1 className='text-3xl'>{selectedCompany.location}</h1>
                    {/* <h1>{selectedCompany.website}</h1> */}
                </div>
                <img src={selectedCompany.logo} alt="" />
            </div>
            <h1 className='py-5 font-bold text-2xl text-center'>Available Jobs</h1>
            <div>
                {
                    selectedCompany.jobs.map(job => <Jobs key={job.id} job={job}></Jobs>)
                }
            </div>
            <Footer></Footer>

        </div>
    );
};

export default CompaniesDetails;
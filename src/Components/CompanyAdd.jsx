

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';


const CompanyAdd = ({company}) => {

    return (
        
            <div>
                <Helmet>
                    <title>{company.name} Info</title>
                </Helmet>
                <Link to={`/companyDetails/${company.id}`} className='flex flex-col items-center gap-2 p-5' >
                <img className='rounded-3xl' src={company.logo} alt="Logo" />
                <p className='font-extrabold'>{company.name}</p>
            </Link>
            </div>
        
    );
};

export default CompanyAdd;
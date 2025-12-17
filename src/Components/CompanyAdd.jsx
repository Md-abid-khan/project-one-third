
import React from 'react';
import { Link } from 'react-router';


const CompanyAdd = ({company}) => {

    return (
        
            <Link to={`/companyDetails/${company.id}`} className='flex flex-col items-center gap-2 p-5' >
                <img className='rounded-3xl' src={company.logo} alt="Logo" />
                <p className='font-extrabold'>{company.name}</p>
            </Link>
        
    );
};

export default CompanyAdd;
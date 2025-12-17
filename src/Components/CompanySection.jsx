import React, { use } from 'react';
import CompanyAdd from './CompanyAdd';

const fetchCompanyData = fetch("/companyDetails.json").then(res=>res.json());

const CompanySection = () => {
    const companyData = use(fetchCompanyData);

    return (
        <div>
            <h1 className='text-2xl font-bold text-center p-5'>Company Section</h1>
            <div className='companyAddDesign'>
                {
                    companyData.map(company=> <CompanyAdd key={company.id} company={company}>

                    </CompanyAdd>)
                }
            </div>
        </div>
    );
};

export default CompanySection;
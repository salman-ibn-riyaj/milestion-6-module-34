import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingObject = ({loadData}) => {
    const pricingData = use(loadData)
    console.log(pricingData);
    return (
        <div className='w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto my-16'>
            {
                pricingData.map( pricingSingleObject=> <PricingCard key={pricingSingleObject.id} pricingSingleObject={pricingSingleObject}></PricingCard>)
            }
        </div>
    );
};

export default PricingObject;
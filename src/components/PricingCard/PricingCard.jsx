// import React, { use } from 'react';
import Feature from "./Feature";

const PricingCard = ({ pricingSingleObject }) => {
  console.log(pricingSingleObject);
  const { features,popular } = pricingSingleObject;
  console.log(features);
  return (
    // <div className='border-2 border-blue-500 rounded-2xl p-3.5 bg-emerald-200 flex flex-col '>
    //     <div>
    //         <h2 className='text-2xl font-bold'>{pricingSingleObject.name}</h2>
    //         <p className='font-bold'>{pricingSingleObject.price}</p>
    //     </div>
    //     <div  className='bg-fuchsia-300 p-5 rounded-md mt-4 flex-1'>
    //         {
    //             features.map(perFeature => <Feature perFeature={perFeature}></Feature>)
    //         }
    //     </div>

    //     <button className="btn w-full mt-3 btn-secondary">Secondary</button>
    // </div>
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <span>{popular && <span className="badge badge-xs badge-warning">Most Popular</span>}</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{pricingSingleObject.name}</h2>
          <span className="text-xl">{pricingSingleObject.price}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <span>
            {features.map((feature) => (
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </span>
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;

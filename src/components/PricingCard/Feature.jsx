import React from 'react';
import {SquareCheckBig} from 'lucide-react';

const Feature = ({perFeature}) => {
    console.log(perFeature);
    return (
        <div>
            <p className='flex gap-1.5 my-1'>{<SquareCheckBig color="#1612e2" />}{perFeature}</p>
        </div>
    );
};

export default Feature;
import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-4 lg:mr-10 hover:bg-blue-500'>
           <a href={route.url}>{route.name}</a> 
        </li>
    );
};

export default Link;
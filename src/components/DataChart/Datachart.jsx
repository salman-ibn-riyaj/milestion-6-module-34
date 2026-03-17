import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

const Datachart = ({studentData}) => {
    console.log(studentData);
    return (
        <LineChart width= '300' height='300' data={studentData}>
            <XAxis style={{width: '700'}}></XAxis>
            <YAxis style={{height: '300'}}></YAxis>
            <Line dataKey= 'physics' stroke='lawngreen'>  
            </Line>
            <Line dataKey={'math'}></Line>
        </LineChart>
    );
};

export default Datachart;
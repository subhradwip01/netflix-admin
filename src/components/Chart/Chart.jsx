import React from 'react'
import "./Chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Chart = ({title,data,dataKey,grid}) => {

    return (
        <div className='chart'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart width={100}
                    data={data}>
                     {grid &&   <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis stroke="#5550bd"/>
                    <Tooltip/>
                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8"  />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
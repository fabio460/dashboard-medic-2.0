
import React from 'react'
import {XAxis,YAxis,CartesianGrid,Tooltip,Area,AreaChart,ResponsiveContainer } from 'recharts';
export default function AreaChartPulmonar({dados}) {

    const data = []

    dados.map((elem,key)=>{
        return data.push({
            
            "x":elem.ind_pulm,
            "y":key
            
        })
    })
  return (
    <div className='graficos' style={{ height: 300,maxWidth:600, minWidth:50}}>
    <ResponsiveContainer >
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="y" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="x" stroke="#8884d8" fill="#8884d8" />
        
      </AreaChart>
    </ResponsiveContainer>
  </div>
  )
}

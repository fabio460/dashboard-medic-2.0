import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,Legend } from 'recharts';
import './Graficos.css'
export default function PureComponentPulmonar({dados}) {

      const data = []

      dados.map(((elem,key)=>{
          return data.push({
              "A":elem.ind_pulm,
               "subject":elem.ind_pulm,
               "fullMark": 1
          })
      }))
      return (
            <RadarChart outerRadius={90} width={310} height={270} data={data} className='RadarChart'>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 1]} />
                  <Radar name="ind_pulm" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  
                  <Legend />
            </RadarChart>
      );
}

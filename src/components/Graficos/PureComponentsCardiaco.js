
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,Legend } from 'recharts';

export default function PureComponentsCardiaco({dados}) {

      const data = []

      dados.map(((elem,key)=>{
          return data.push({
              "A":elem.ind_card,
               "subject":elem.ind_card,
               "fullMark": 1
          })
      }))
      return (
            <RadarChart className='RadarChart' outerRadius={80} width={310} height={270} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 1]} />
            <Radar name="ind_card" dataKey="A" stroke="red" fill="red" fillOpacity={0.6} />
            
            <Legend />
            </RadarChart>
      );
}

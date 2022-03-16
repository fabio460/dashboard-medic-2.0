
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
            <RadarChart outerRadius={90} width={340} height={270} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 1]} />
            <Radar name="ind_card" dataKey="A" stroke="red" fill="red" fillOpacity={0.6} />
            
            <Legend />
            </RadarChart>
      );
}

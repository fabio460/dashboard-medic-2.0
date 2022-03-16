import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';




const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#FF1941','#AE1564'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Example() {
  const lista = useSelector(state=>state.Lista.lista)


  
  var menorQueVinte = 0
  var entreVinteETrinta = 0
  var entreTrintaEQuarenta = 0 
  var entreQuarentaECinquenta = 0
  var entreCinquentaESessenta = 0
  var idosos = 0
  lista.map((item,key)=>{
      
       if(item.idade < 20){
           menorQueVinte = menorQueVinte + 1
       }
       if((item.idade >= 20) && (item.idade < 30)){
           entreVinteETrinta = entreVinteETrinta + 1
       }
       if((item.idade >= 30) && (item.idade < 40)){
        entreTrintaEQuarenta = entreTrintaEQuarenta + 1
       }
       if((item.idade >= 40) && (item.idade < 50)){
        entreQuarentaECinquenta = entreQuarentaECinquenta + 1
       }
       if((item.idade >= 50) && (item.idade < 60)){
        entreCinquentaESessenta = entreCinquentaESessenta + 1
       }
       if(item.idade >= 60){
           idosos = idosos + 1
       }

       return 1
  })
  const data = [
    { name: 'Group A', value: menorQueVinte },
    { name: 'Group B', value: entreVinteETrinta },
    { name: 'Group C', value: entreTrintaEQuarenta },
    { name: 'Group D', value: entreQuarentaECinquenta },
    { name: 'Group e', value: entreCinquentaESessenta },
    { name: 'Group g', value: idosos },
    
  ];

   
    return (
      
      <ResponsiveContainer width="70%" height="100%">
        
        <PieChart width={200} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  
}
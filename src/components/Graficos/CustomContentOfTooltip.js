import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const getIntroOfPage = (label) => {
  if (label === 'Page A') {
    return "Page A is about men's clothing";
  }
  if (label === 'Page B') {
    return "Page B is about women's dress";
  }
  if (label === 'Page C') {
    return "Page C is about women's bag";
  }
  if (label === 'Page D') {
    return 'Page D is about household goods';
  }
  if (label === 'Page E') {
    return 'Page E is about food';
  }
  if (label === 'Page F') {
    return 'Page F is about baby food';
  }
  return '';
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

export default function CustomContentOfTooltip(){

  let AM = 0
  let RO = 0
  let CE = 0
  let AP = 0 
  let AC = 0 
  let PR = 0
  let BA = 0
  let SP = 0
  let RJ = 0
  let PE = 0
  let MG = 0
  let DemaisRegioes = 0

    const listaDePacientes = useSelector(state=>state.Lista.lista)
    
    listaDePacientes.map((elem,key)=>{
      
       switch (elem.estado) {
         case 'PE':
           PE+= 1
           break;
           case 'RO':
            RO+=1
            break;
          case 'AM':
            AM+=1
            break;
          case 'AP':
            AP+=1
            break;  
            case 'CE':
              CE+=1
              break;
            case 'BA':
              BA+=1
              break;
            case 'PR':
              PR+=1
              break; 
              case 'AC':
                AC+=1
                break; 

            case 'SP':
              SP+=1
              break;
            case 'MG':
              MG+=1
                  break; 
            case 'RJ':
              RJ+=1
                  break; 
          
         default:
           DemaisRegioes+=1
           break;
       }
       return 1
    })
    
    console.log(RO+'-'+PE+'-'+AM+'-'+AP+'-'+CE+'-'+AC+'-'+MG+'-'+SP+'-'+DemaisRegioes)
    
    const data = [
      {
        name: 'RO',
        pacientes: RO,
        
        amt: 2400,
      },
      {
        name: 'RJ',
        
        pacientes: RJ,
        amt: 2210,
      },
      {
        name: 'PE',
        
        pacientes: PE,
        amt: 2290,
      },
      {
        name: 'AM',
        pacientes: AM,
    
        amt: 2000,
      },
      {
        name: 'AP',
        pacientes: AP,
    
        amt: 2181,
      },
      {
        name: 'CE',
        pacientes: CE,
      
        amt: 2500,
      },
      {
        name: 'AC',
        pacientes: AC,
        
        amt: 2100,
      },
      {
        name: 'MG',
        pacientes: MG,
        
        amt: 2500,
      },
      {
        name: 'demais',
        pacientes: DemaisRegioes,
        
        amt: 2100,
      },
      {
        name: 'BA',
        pacientes: BA,
        
        amt: 2500,
      },
      {
        name: 'PR',
        pacientes: PR,
        
        amt: 2100,
      },
    ];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="pacientes"  barSize={20} fill="blue" />
          
        </BarChart>
      </ResponsiveContainer>
    );
  }

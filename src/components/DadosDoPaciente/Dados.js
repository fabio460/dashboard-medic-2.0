import React, { useEffect } from 'react'
import './Dados.css'
import {useState} from 'react'
import AreaChartPulmonar from '../Graficos/AreaChartPulmonar'
import AreaChartCardiaco from '../Graficos/AreaChartCardiaco'
import GraficoPizzaPulmonar from '../Graficos/GraficoPizzaPulmonar'
import PureComponentPulmonar from '../Graficos/PureComponentPulmonar'
import GraficoPizzaCardiaco from '../Graficos/GraficoPizzaCardiaco'
import PureComponentsCardiaco from '../Graficos/PureComponentsCardiaco'
import api from '../../api'
export default function Dados() {

  //pegar dados de indices
  const [indicepulm,setIndicepulm] = useState([])
  const [indiceCardiaco,setIndiceCardiaco] = useState([])
  const [paciente,setPaciente] = useState([])
  async function getIndices(cpf){
      const formdata = new FormData()
      formdata.append('CPF',cpf)
      const indicepulm =await api.getIndicePulmonar(cpf)
      setIndicepulm(indicepulm)
      const indiceCardiaco =await api.getIndiceCardiaco(cpf)
      setIndiceCardiaco(indiceCardiaco)
  }

  //pegar dados do pacente

  async function getPaciente(cpf){
    const paciente =await api.getPacientePorCpf(cpf)
    setPaciente(paciente)
  }

  var cpf = localStorage.getItem('cpf')
  useEffect(()=>{
    getIndices(cpf)
    getPaciente(cpf)
  },[cpf])

  return (
    <div className='Dados'>
       {paciente.map(item=>{
         return <h1 style={{textAlign:'center'}}>{item.nome}</h1>
       })}

       <div className='graficoPizza'>
         <div className='pizzasItens'><GraficoPizzaPulmonar dados={indicepulm}/></div>
         <div className='pizzasItens'>  <GraficoPizzaCardiaco dados={indiceCardiaco}/></div>
       
       </div>

       <div className='graficosIndices'>
          <div className='indicesGraficoPulm'>
            <h4 style={{textAlign:'center'}}>Indice Pulmonar</h4>
             <AreaChartPulmonar dados={indicepulm}/> 
          </div>
          <div className='indiceGrafcosCardiaco'>
            <h4 style={{textAlign:'center'}}>Indice cardiaco</h4>
              <AreaChartCardiaco dados={indiceCardiaco}/>
          </div>
       </div>
    </div>
  )
}

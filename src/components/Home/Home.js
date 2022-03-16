import React from 'react'
import './Home.css'
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import WomanSharpIcon from '@mui/icons-material/WomanSharp';
import ManSharpIcon from '@mui/icons-material/ManSharp';
import PieChartWithPaddingAngle from '../Graficos/PieChartWithPaddingAngle';

import CustomContentOfTooltip from '../Graficos/CustomContentOfTooltip';
export default function Home({lista}) {

  var homens = 0
  var mulheres = 0
  var total = 0
  var menorQueVinte = 0
  var entreVinteETrinta = 0
  var entreTrintaEQuarenta = 0 
  var entreQuarentaECinquenta = 0
  var entreCinquentaESessenta = 0
  var idosos = 0
  lista.map((item)=>{
        total = 1 + total
       
       if(item.sexo === 'Masculino'){
        homens = 1 + homens
       }
       if(item.sexo === 'Feminino'){
        mulheres = 1 + mulheres
       }
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

  const data = [];

  return (
    <div className='home'>
       <h1 className='tituloHome'>Dashboard</h1>    
       <div className='quantidadeDePacientes'>
           <div className='quantPacientesItens'>
               <FullscreenIcon  sx={{width:'130px',blockSize:'100%'}}/>
               <div>
                   <h5>Total de pacientes</h5>
                   <h1 className='quantPacientesItensNumeros'>{total}</h1>
                </div>    
            </div>   
           <div className='quantPacientesItens'>
               <WomanSharpIcon  sx={{width:'130px',blockSize:'100%'}}/>
               <div>
                   <h5>Mulheres</h5>
                   <h1 className='quantPacientesItensNumeros'>{mulheres}</h1>
                </div>     
            </div>  
           <div className='quantPacientesItens'>
               <ManSharpIcon  sx={{width:'130px',blockSize:'100%'}}/>
               <div>
                   <h5>Homens</h5>
                   <h1 className='quantPacientesItensNumeros'>{homens}</h1>
                </div>     
            </div>  
        </div>
        <div className='pacientesIndicesAltos'>
            
           <div className='pacientesIndicesAltosItens'>
               
               <PieChartWithPaddingAngle data={data}/>
               <div>
                   <div className='faixaDeIdade azul'>menos de 20 anos</div>
                   <div className='faixaDeIdade amarelo'>entre 20 e 30 anos</div>
                   <div className='faixaDeIdade vermelho'>entre 30 e 40 anos</div>
                   <div className='faixaDeIdade laranja'>entre 40 e 50 anos</div>
                   <div className='faixaDeIdade verde'>entre 50 e 60 anos</div>
                   <div className='faixaDeIdade roxo'>acima de 60 anos</div>
                   
               </div>
            </div>
           <div className='pacientesIndicesAltosItens'>
               <CustomContentOfTooltip/>   
            </div>
          
        </div>
        <div className='quantidadeDePacientes'>
           <div className='quantPacientesItens'>quantidade</div>   
           <div className='quantPacientesItens'>quantidade</div>  
           <div className='quantPacientesItens'>quantidade</div>  
        </div>
    </div>
  )
}

import './ItensSideBar.css'
import React from 'react'
import { useHistory } from 'react-router-dom'
export default function ItensSideBar() {
  const h = useHistory()
  return (
    <div>
      <div>Menu</div>
       <ul>
         <li><div onClick={()=>h.push('/')} className='listaSideBarItens'>Dashboard</div></li>
         <li> <div onClick={()=>h.push('/lista')} className='listaSideBarItens'>Lista de pacientes</div></li>
       </ul>
    </div>
  )
}

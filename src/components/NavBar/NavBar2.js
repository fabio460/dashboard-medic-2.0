import React from 'react'
//import { useHistory } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersistentDrawerLeft from '../PersistentDrawerLeft/PersistentDrawerLeft'
import './NavBar.css'
import SimpleBadge from '../Material UI/SimpleBadge';


export default function NavBar2() {
   // const h = useHistory()
  return (
    <div className='navbarBody'>
        <div className='navbarBodyItens'>
            <h2 className='navBarLogo'>Medic Pacientes</h2>
        </div>
        <div className='navbarBodyItens'>
             <div className='navbarBodyItem'> <SimpleBadge/></div>
             <div className='navbarBodyItem'><AccountCircleIcon /></div>
             <div className='navbarBodyItem'><span className='btnNavbarBodyItem'><PersistentDrawerLeft />  </span></div>
        </div>
    </div>
  )
}

import React from 'react'
//import { useHistory } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersistentDrawerLeft from '../PersistentDrawerLeft/PersistentDrawerLeft'
import './NavBar.css'


export default function NavBar2() {
   // const h = useHistory()
  return (
    <div className='navbarBody'>
        <div className='navbarBodyItem'>
            <h2 className='navBarLogo'>Medic Pacientes</h2>
        </div>
        <div className='navbarBodyItem'>
             <AccountCircleIcon />
             
             <span className='btnNavbarBodyItem'><PersistentDrawerLeft />  </span>
        </div>
    </div>
  )
}

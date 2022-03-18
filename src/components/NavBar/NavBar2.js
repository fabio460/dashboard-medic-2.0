import React from 'react'
import { useHistory } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersistentDrawerLeft from '../PersistentDrawerLeft/PersistentDrawerLeft'
import './NavBar.css'
import SimpleBadge from '../Material UI/SimpleBadge';


export default function NavBar2() {
    const h = useHistory()
  return (
    <div className='navbarBody'>
        <div className='navbarBodyItens'>
            <h2 className='navBarLogo' onClick={()=>h.push('/')}>Medic Pacientes</h2>
        </div>
        

        <div className='navbarBodyItens'>
             <div className='navbarBodyItem'> <SimpleBadge/></div>
             

             <div class="dropdown">
                  <div class=""  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <div className='navbarBodyItem'><AccountCircleIcon /></div>
                  </div>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><div class="dropdown-item" >Logout</div></li>
                    <li><div class="dropdown-item">Criar conta</div></li>
                    
                  </ul>
              </div>

             <div className='navbarBodyItem'><span className='btnNavbarBodyItem'><PersistentDrawerLeft />  </span></div>
        </div>
    </div>
  )
}

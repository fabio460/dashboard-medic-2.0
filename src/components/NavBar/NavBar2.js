import React from 'react'
import { useHistory } from 'react-router-dom'
import PersistentDrawerLeft from '../PersistentDrawerLeft/PersistentDrawerLeft'
import './NavBar.css'
export default function NavBar2() {
    const h = useHistory()
  return (
    <div className='navbarBody'>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Logo</a>
                <div onClick={()=>{h.push('/')}} style={{cursor:'pointer'}} class="nav-link active" aria-current="page">Home</div>
                <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><PersistentDrawerLeft/></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                </div>
            </div>
        </nav>
    </div>
  )
}

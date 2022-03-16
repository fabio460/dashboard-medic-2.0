import React from 'react'
//import { useHistory } from 'react-router-dom'
import PersistentDrawerLeft from '../PersistentDrawerLeft/PersistentDrawerLeft'
import './NavBar.css'
export default function NavBar2() {
   // const h = useHistory()
  return (
    <div className='navbarBody'>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="f">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><PersistentDrawerLeft/></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="f">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="f">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="f" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="f">Action</a></li>
            <li><a class="dropdown-item" href="f">Another action</a></li>
            <li class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="f">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

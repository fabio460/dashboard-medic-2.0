import './App.css';
import React, { useEffect, useState } from 'react'
import TabelaDePacientes from './components/TabelaDePacientes/TabelaDePacientes';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Dados from './components/DadosDoPaciente/Dados';
import Home from './components/Home/Home';
import {useDispatch} from 'react-redux'
import api from './api'
import NavBar2 from './components/NavBar/NavBar2';
function App() {

  
  const [list,setList]= useState([])
  async function getListaTotal(){
    const lista =await api.getList()
    setList(lista)
  }
  const usedispatch = useDispatch()
  usedispatch({
    type:'yes',
    payload:{lista:list}
  })
  useEffect(()=>{
    getListaTotal()
  },[])
  
  return (
    <div className="App">
      <BrowserRouter>
         <Switch>
           <Route exact path={'/'}>
               <NavBar2/>
               <div className='body'>
                  <SideBar/>
                  <Home lista={list}/>
               </div>
             </Route>
             <Route path={'/dados'}>
               <NavBar/>
               <div className='body'>
                  <SideBar/>
                  <Dados/>
               </div>
             </Route>
             <Route path={'/lista'}>
             <NavBar/>
               <div className='body'>
                  <SideBar/>
                  <TabelaDePacientes rows={list}/>
               </div>
             </Route>
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

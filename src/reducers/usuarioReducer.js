const inicialState = {
    nome:'fabio'
}
const UsuarioRedurcer = (state=inicialState,action)=>{
   switch (action.type) {
       case 'sim':
             return {...state, nome:action.payload.nome}
       default:
            break; 
   
   }
   return state
}

export default UsuarioRedurcer
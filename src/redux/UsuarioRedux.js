const stateInicial = {
    lista:[]
}

const UsuarioRedux = (state=stateInicial,action)=>{
    switch (action.type) {
        case 'lista':
           return {...state,lista:action.payload.lista}
    
        default:
            break;
    }
    return state
}
export default UsuarioRedux
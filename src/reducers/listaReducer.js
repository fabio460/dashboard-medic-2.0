const listaInicial = {
    lista:[]
}

const listaReducer = (state=listaInicial,action)=>{
    switch (action.type) {
        case 'yes':
              return {...state,lista:action.payload.lista}
            
            default:
                break;    
    }
    return state
}


export default listaReducer
const variavelInicial = {
    texto:'texto inicial'
}

const variavelReducer = (state=variavelInicial,action)=>{
    switch ('variavel') {
        case state.type:
               return {...state,texto:action.payload.texto}
            break;
    
        default:
            break;
    }
    return state
}
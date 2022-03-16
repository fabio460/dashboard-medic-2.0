import {combineReducers} from 'redux'
import listaReducer from './listaReducer'
import UsuarioRedurcer from './usuarioReducer'

export default combineReducers({
    Usuario:UsuarioRedurcer,
    Lista:listaReducer
})
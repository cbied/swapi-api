import { createStore, combineReducers } from 'redux'
import infoReducer from './infoReducer'

const rootReducer = combineReducers({
    infoReducer: infoReducer
})

export default createStore(rootReducer)
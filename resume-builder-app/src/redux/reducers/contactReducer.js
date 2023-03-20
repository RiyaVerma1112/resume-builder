import * as actionType from '../actions/action' ;
import initialState from './initialState.json' ;

const contactReducer = (state= initialState.contact , action)=> {
    switch(action.type) {
        case actionType.SET_CONTACT:
            return {
                ...action.payload
            }
        case actionType.UPDATE_CONTACT:
            return {
                ...action.payload
            }
        default : return state
    }
}

export default contactReducer ;
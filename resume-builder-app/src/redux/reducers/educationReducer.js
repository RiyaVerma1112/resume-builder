import * as actionType from '../actions/action' ;
import initialState from './initialState.json' ;

const educationReducer = (state= initialState.education , action)=> {
    switch(action.type) {
        case actionType.SET_EDUCATION:
            return {
                ...action.payload
            }
        case actionType.UPDATE_EDUCATION:
            return {
                ...action.payload
            }
        default : return state ;
    }
}

export default educationReducer ;
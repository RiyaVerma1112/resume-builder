import * as actionType from '../actions/action' ;
import initialState from './initialState.json' ;

// creating document reducer
const documentReducer = (state = initialState.document , action) => {
    // perform action define under action file 
    switch(action.type) {
        case actionType.SET_SKIN: 
            return {
                ...state,
                id:action.payload.id,
                skinCd:action.payload.skinCd 
            }
        case actionType.UPDATE_SKIN: 
            return {
                ...state,
                skinCd:action.payload.skinCd
            }
        default : return state
    }
} 

export default documentReducer ;
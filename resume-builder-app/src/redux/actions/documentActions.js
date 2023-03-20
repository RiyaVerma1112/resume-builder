// import the action file which has actions 
import * as actionType from './action' ;
import {v4 as uuidv4} from 'uuid' ;

export const setSkin = (skinCd) => {
    return {
        type: actionType.SET_SKIN,
        payload: {
            id:uuidv4(),
            skinCd:skinCd 
        }
    }
} 

export const updateSkin = (skinCd) => {
    return {
        type:actionType.UPDATE_SKIN,
        payload: {
            skinCd:skinCd
        }
    }
}
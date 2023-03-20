// import the action file which has actions 
import * as actionType from './action' ;
// import {v4 as uuidv4} from 'uuid' ;

export const setContact = (contact) => {
    return {
        type: actionType.SET_CONTACT,
        payload: contact 
    }
} 

export const updateContact = (contact) => {
    return {
        type:actionType.UPDATE_CONTACT,
        payload: contact
    }
}
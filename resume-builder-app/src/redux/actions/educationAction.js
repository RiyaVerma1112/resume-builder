// import the action file which has actions 
import * as actionType from './action' ;

export const setEducation = (education) => {
    return {
        type: actionType.SET_EDUCATION,
        payload: education 
    }
} 

export const updateEducation = (education) => {
    return {
        type:actionType.UPDATE_EDUCATION,
        payload: education
    }
}
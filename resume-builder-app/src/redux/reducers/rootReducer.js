import contactReducer from "./contactReducer" ;
import educationReducer from "./educationReducer" ;
import documentReducer from "./documentReducer" ;
import { combineReducers } from "redux" ;
import {firebaseReducer} from 'react-redux-firebase' 
import {firestoreReducer} from 'redux-firestore'
import authReducer from "./authReducers";


const rootReducer = combineReducers({
    document: documentReducer,
    contact: contactReducer,
    education: educationReducer,
    firebase : firebaseReducer , 
    fireStore : firestoreReducer ,
    auth : authReducer
})

export default rootReducer ;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {Provider} from 'react-redux' ;
import rootReducer from './redux/reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore , applyMiddleware,} from 'redux'
import firebase from 'firebase/compat/app' ;
import 'firebase/compat/firestore' ;
import 'firebase/compat/auth';
import thunk from 'redux-thunk' ;
import { reduxFirestore , getFirestore } from  'redux-firestore' ;
import { ReactReduxFirebaseProvider , getFirebase} from 'react-redux-firebase' ;
import { createFirestoreInstance } from 'redux-firestore' ;

// const firebaseConfig = {
//   apiKey: "AIzaSyCAMf5omZT8W6LFdpn3jwG3lEmo8ifWQbY",
//   authDomain: "resume-3f8c3.firebaseapp.com",
//   projectId: "resume-3f8c3",
//   storageBucket: "resume-3f8c3.appspot.com",
//   messagingSenderId: "445288947494",
//   appId: "1:445288947494:web:14fe7823bb52578b6e6be7",
//   measurementId: "G-YCYXHH6WG4"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCa4pn6on2f74yfkS8n-cbvAv5qy9R61vE",
  authDomain: "resume-builder-final-8968e.firebaseapp.com",
  projectId: "resume-builder-final-8968e",
  storageBucket: "resume-builder-final-8968e.appspot.com",
  messagingSenderId: "243106691764",
  appId: "1:243106691764:web:55f751c82c380e7fe575e1"
};

firebase.initializeApp(firebaseConfig) ;
firebase.firestore() ;

const reduxStore = createStore(rootReducer ,
   composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirestore , 
    getFirebase})) , reduxFirestore(firebase))) ;

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {reduxStore}>
     <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <App/>
     </ReactReduxFirebaseProvider> 
    </Provider>
  </BrowserRouter> 
,
  document.getElementById('root')
);
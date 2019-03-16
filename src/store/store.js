import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBf9fDKbxiSkRvSxOdybFMZEGOEMNNFFdI',
  authDomain: 'clientmanager-80f3c.firebaseapp.com',
  databaseURL: 'https://clientmanager-80f3c.firebaseio.com',
  projectId: 'clientmanager-80f3c',
  storageBucket: 'clientmanager-80f3c.appspot.com',
  messagingSenderId: '145821546683'
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

// Init firebase instance
firebase.initializeApp(config);
// Init firestore
firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

// set rootReducer to connect with firebaseReducer, firestoreReducer
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Initial state
const initialState = {};

// Create Store
// add reduxdevtools and can be loaded even user haven't install reduxdevtools
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose()
  )
);

export default store;

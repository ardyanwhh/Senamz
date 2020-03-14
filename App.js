import React from 'react';
import Router from './src/routers/Router';
import firebase from 'firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default App = () => {
  !firebase.apps.length
    ? firebase.initializeApp({
      apiKey: "AIzaSyB0UOBU7WIYOdf1BlaFhmvI978AOLTWqyE",
      authDomain: "senam-1e72a.firebaseapp.com",
      databaseURL: "https://senam-1e72a.firebaseio.com",
      projectId: "senam-1e72a",
      storageBucket: "senam-1e72a.appspot.com",
      messagingSenderId: "1031755005528",
      appId: "1:1031755005528:web:f24e7777c6fe6efdba942d",
      measurementId: "G-FZHRJBLJQ1"
    })
    : false;

    Ionicons.loadFont();
  
  return (
    <Router/>
  );
};
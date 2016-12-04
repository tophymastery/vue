import Vue from 'vue'
import router from './router'
import firebase from 'firebase'
import App from './App'

firebase.initializeApp({
  apiKey: 'AIzaSyAvu6wuyRNmOPlLO_TrPrgsNxRIQUrN9Q4',
  authDomain: 'vue-for-realworld.firebaseapp.com',
  databaseURL: 'https://vue-for-realworld.firebaseio.com',
  storageBucket: 'vue-for-realworld.appspot.com',
  messagingSenderId: '261588433895'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})

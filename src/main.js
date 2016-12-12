import Vue from 'vue'
import router from './router'
import firebase from 'firebase'
import moment from 'moment'

import '!script!jquery/dist/jquery.min.js'
import '!script!semantic-ui-css/semantic.min.js'
import '!style!css!semantic-ui-css/semantic.min.css'

import App from './App'

firebase.initializeApp({
  apiKey: 'AIzaSyAvu6wuyRNmOPlLO_TrPrgsNxRIQUrN9Q4',
  authDomain: 'vue-for-realworld.firebaseapp.com',
  databaseURL: 'https://vue-for-realworld.firebaseio.com',
  storageBucket: 'vue-for-realworld.appspot.com',
  messagingSenderId: '261588433895'
})

const ticker = new Vue({
  data: () => ({
    tick: 0
  }),
  created () {
    setInterval(() => {
      this.tick = Date.now()
    }, 10000)
  }
})

Vue.filter('upper', (value) => {
  if (typeof value === 'string') {
    return value.toUpperCase()
  }
  return value
})

Vue.filter('fromNow', (value) => {
  ticker.tick
  return moment(value).fromNow()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})

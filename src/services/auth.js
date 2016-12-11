import firebase from 'firebase'

const getCurrentUser = () => firebase.auth().currentUser
const requireUser = (callback) => {
  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    unsubscribe()
    callback(user)
  })
}

export default {
  getCurrentUser,
  requireUser
}

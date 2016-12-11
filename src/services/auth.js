import firebase from 'firebase'

const getCurrentUser = () => firebase.auth().currentUser

export default {
  getCurrentUser
}

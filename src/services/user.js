import firebase from 'firebase'

const get = (id, callback) => {
  firebase.database()
    .ref(`user/${id}`)
    .once('value', (snapshot) => {
      callback(snapshot.val())
    })
}

const set = (id, data) => {
  return firebase.database()
    .ref(`user/${id}`)
    .set(data)
}

export default {
  get,
  set
}

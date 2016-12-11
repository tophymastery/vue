import User from './user'
import Auth from './auth'

const getId = () => Auth.getCurrentUser().uid

const get = (callback) => {
  User.get(getId(), callback)
}

const set = (data) => {
  return User.set(getId(), data)
}

export default {
  get,
  set
}

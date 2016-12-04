<template>
  <div class="ui menu">
      <router-link to="/" class="item" active-class="active" exact>Home</router-link>
      <div class="right menu">
        <router-link to="/profile" class="item" active-class="active">Profile</router-link>
        <router-link to="/signin" class="item" active-class="active">Sign In</router-link>
        <div v-if="currentUser" class="link item">Sign Out</div>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    currentUser: null
  }),
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      this.currentUser = user
    })
  }
}
</script>
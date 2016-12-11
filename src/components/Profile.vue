<template>
  <div class="ui segment">
    <h3 class="ui header">Profile</h3>
    <h4>Name:</h4> {{ profile.name }} <br>
    <h4>Description:</h4> {{ profile.description }} <br>
    <router-link to="/profile/edit" class="ui green button">Edit</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    profile: {
      name: '',
      description: ''
    }
  }),
  created () {
    const userId = firebase.auth().currentUser.uid
    firebase.database()
      .ref(`user/${userId}`)
      .once('value', (snapshot) => {
        this.profile = snapshot.val()
      })
  }
}
</script>
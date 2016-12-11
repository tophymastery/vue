<template>
  <div class="ui segment">
    <h3 class="ui header">Edit Profile</h3>
    <profile-form @save="save"></profile-form>
  </div>
</template>

<script>
  import ProfileForm from './ProfileForm'

  export default {
    components: {
      ProfileForm
    },
    methods: {
      save () {
        console.log('save form')
      }
    }

  }
</script>
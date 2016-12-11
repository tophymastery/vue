<template>
  <div class="ui segment">
    <h3 class="ui header">Edit Profile</h3>
    <profile-form v-model="profile" @save="save"></profile-form>
    {{ profile }}
  </div>
</template>

<script>
  import ProfileForm from './ProfileForm'

  export default {
    components: {
      ProfileForm
    },
    data: () => ({
      profile: {
        name: '',
        description: ''
      }
    }),
    methods: {
      save () {
        console.log('save form')
        console.log(this.profile)
      }
    }

  }
</script>
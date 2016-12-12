<template>
  <div>
    <img v-if="profile.photo" :src="profile.photo" class="ui circular image">
    <h4>Name:</h4> {{ profile.name | upper }} <br>
    <h4>Description:</h4> {{ profile.description }} <br>
  </div>
</template>

<style scoped>
  img.circular.image {
    width: 120px;
    height: 120px;
  }
</style>

<script>
export default {
  props: ['profile']
}
</script>

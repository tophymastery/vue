<template>
  <div>
    <h4>Name:</h4> {{ profile.name | upper }} <br>
    <h4>Description:</h4> {{ profile.description }} <br>
  </div>
</template>

<script>
export default {
  props: ['profile']
}
</script>

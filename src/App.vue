<template>
  <div id="app">
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu'

export default {
  components: {
    TopMenu
  }
}
</script>
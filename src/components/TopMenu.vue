<template>
  <div class="ui menu">
      <router-link to="/" class="item" active-class="active" exact>Home</router-link>
      <div class="right menu">
        <router-link to="/profile" class="item" active-class="active">Profile</router-link>
        <router-link to="/signin" class="item" active-class="active">Sign In</router-link>
        <div class="link item">Sign Out</div>
      </div>
    </div>
</template>
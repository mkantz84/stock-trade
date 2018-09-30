<template>
  <div id="app" class="container">
    <app-headers></app-headers>
    <div class="row">
      <div class="col-12 p-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";

export default {
  name: 'App',
  components: {
    appHeaders: Header,
    appHome: Home
  }
}
</script>

<style>
  body {
    padding: 30px;
  }
</style>

<template>
  <div id="app" class="container">
    <app-headers></app-headers>
    <app-home></app-home>
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

</style>

<template>
  <div id="app">
    <app-headers></app-headers>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: 'App',
  components: {
    appHeaders: Header
  }
}
</script>

<style>

</style>

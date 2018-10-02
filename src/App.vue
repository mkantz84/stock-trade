<template>
  <div id="app" class="container">
    <app-headers></app-headers>
    <div class="row">
      <div class="col-12 p-3">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
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
  },
  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>

<style>
  body {
    padding: 30px;
  }

  .slide-leave-active {
    animation: slide-out 0.2s ease-out forwards;
  }

  .slide-enter-active {
    animation: slide-in 0.2s ease-out forwards;
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-30px);
      opacity: 0;
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>

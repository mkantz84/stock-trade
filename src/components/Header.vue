<template>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand">Stock Trader</router-link>


  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <router-link to="/portfolio" activeClass="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
      <router-link to="/stocks" activeClass="active" tag="li"><a class="nav-link">Stocks</a></router-link>
    </ul>
    <ul class="navbar-nav navbar-right">
      <li class="nav-item">
        <a class="nav-link" href="#">End Day</a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#" id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Save Data</a>
          <a class="dropdown-item" href="#">Load Data</a>
        </div>
      </li>
    </ul>
  </div>
</nav>






  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-top: 15px">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <div class="collapse navbar-collapse">
      <div class="navbar-nav">
        <router-link to="/portfolio" class="nav-item nav-link" href="#">Portfolio <span class="sr-only">(current)</span></router-link>
        <router-link to="/stocks" class="nav-item nav-link" href="#">Stocks</router-link>
      </div>
    </div>
  </nav> -->
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

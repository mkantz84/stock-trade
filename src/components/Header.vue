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
          <a class="nav-link mr-3" @click="endDay" href="#">End Day</a>
        </li>
        <li class="nav-item dropdown" @click="isDropDownOpen = !isDropDownOpen">
          <a
            class="nav-link dropdown-toggle mr-3"
            href="#" id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">Save & Load
          </a>
          <div
            class="dropdown-menu"
            :class="{show: isDropDownOpen}"
            aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropDownOpen: false,
      node: 'data'
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    stocks() {
      return this.$store.getters.stockPortfolio;
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks'
    ]) ,
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      this.resource.saveData(this.stocks);
    }
  },
  created() {
    const customActions = {
        saveData: {method: 'POST', url: 'stocks.json'},
        getData: {method: 'GET'}
    };
    this.resource = this.$resource('{node}.json', {}, customActions);
  }
};
</script>

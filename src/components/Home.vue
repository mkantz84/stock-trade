<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">Trade or View your Portfolio</h3>
      <div class="card-text">You may Save or Load your Data</div>
      <div class="card-text">Click on 'End Day' to begin a new Day!</div>
      <hr>
      <h5>Your Funds: ${{ funds }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return (this.$store.getters.funds/1000).toFixed(3);
    }
  }
}
</script>

<style>

</style>

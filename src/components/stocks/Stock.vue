<template>
  <div class="col-sm-6 p-3">
      <div class="card">
        <div class="card-header bg-success">
          <strong>{{ stock.name }}</strong>
          <small>(Price: {{ stock.price }})</small>
        </div>
        <div class="card-body">
          <div class="float-left">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity">
          </div>
          <div class="float-right">
            <button class="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['stock']
}
</script>


<template>
  <div class="col-sm-6 p-3">
      <div class="card">
        <div class="card-header bg-info">
          <strong>{{ stock.name }}</strong>
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </div>
        <div class="card-body">
          <div class="float-left">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity">
          </div>
          <div class="float-right">
            <button
              @click.prevent="sellStock"
              :disabled="quantity <= 0"
              class="btn btn-info">Sell</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ['stock'],
  data() {
    return {
      quantity: ''
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.placeSellOrder(order);
      this.quantity = '';
    }
  }
}
</script>



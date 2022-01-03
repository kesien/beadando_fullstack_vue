<template>
  <div>
    <div class="field">
      <label class="label">Product Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="productName"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Price</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="productPrice"
        />
      </div>
    </div>

    <div class="control">
      <router-link :to="{ name: 'Index' }" class="button is-info mr-2"
        >Cancel</router-link
      >
      <button class="button is-success" @click="saveProduct">SAVE</button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from 'axios';
import { config } from '../environment.js';

export default {
  name: 'AddProduct',
  data() {
    return {
      productName: '',
      productPrice: '',
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post(config.base_url + 'products', {
          product_name: this.productName,
          product_price: this.productPrice,
        });
        this.productName = '';
        this.productPrice = '';
        this.$router.push('/');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>

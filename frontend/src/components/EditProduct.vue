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
      <button class="button is-success" @click="updateProduct">UPDATE</button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from 'axios';
import { config } from '../environment.js';

const base_url = config.base_url;

export default {
  name: 'EditProduct',
  data() {
    return {
      productName: '',
      productPrice: '',
    };
  },
  created: function () {
    this.getProductById();
  },
  methods: {
    // Get Product By Id
    async getProductById() {
      try {
        const response = await axios.get(
          base_url + `products/${this.$route.params.id}`
        );
        this.productName = response.data.product_name;
        this.productPrice = response.data.product_price;
      } catch (err) {
        console.log(err);
      }
    },

    // Update product
    async updateProduct() {
      try {
        await axios.put(base_url + `products/${this.$route.params.id}`, {
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

<template>
  <div class="content">
    <div class="row">
      <div class="col-lg-3 col-md-4 order-md-1 mt-md-8">
        <div class="filter">
          <v-select
              :items="categories"
              label="Filter by category"
              solo
          ></v-select>
        </div>
      </div>
      <div class="col-lg-9 col-md-8 order-md-0">
        <h1 class="text--primary mb-3">Products</h1>

        <div class="product">
          <div
              class="product__item elevation-10"
              v-for="product in products"
              :key="product.id"
              :data="product"
          >
            <router-link
                class="product__image-wrapper"
                :to="'/product/' + product.id"
            >
              <div
                  class="exclusive-label"
                  v-if="product.isExclusive"
              >
                <span>Exclusive</span>
              </div>
              <img class="product-image" :src="product.img" alt="product">
            </router-link>
            <div class="product__description-wrapper">
              <div class="row">
                <div class="col-md-7 product__description">
                  <h4 class="product__title">{{product.title}}</h4>
                  <p class="product__category">{{product.category}}</p>
                  <p class="product__price">${{product.price}}</p>
                </div>
                <div class="col-md-5">
                  <div class="button-wrapper">
                    <button
                        class="default-button"
                        @click="addToCart(product)"
                    >Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      products () {
        return this.$store.state.products
      },
      categories () {
        return this.$store.state.categories
      }
    },
    methods: {
      addToCart (product) {
        let counter = 1
        let index = this.$store.state.cartProducts.indexOf(product)
        let sum = product['price']
        if (index !== -1) {
          this.$store.state.cartProducts[index].counter++
          this.$store.state.cartProducts[index].sum = this.$store.state.cartProducts[index].counter * this.$store.state.cartProducts[index].price
        } else {
          product['counter'] = counter
          product['sum'] = sum
          this.$store.state.cartProducts.push(product)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/main.scss';
</style>
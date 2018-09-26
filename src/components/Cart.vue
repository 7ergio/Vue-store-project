<template>
  <div class="content">
    <div class="row">
      <div class="col-lg-9">
        <h1 class="text--primary mb-3">Cart</h1>
        <div class="cart">
          <div class="cart__header d-none d-md-block">
            <div class="row">
              <div class="col-lg-6 col-md-5">
                <h6>Product</h6>
              </div>
              <div class="col-md-1">
                <h6>Price</h6>
              </div>
              <div class="col-md-1">
                <h6>Number</h6>
              </div>
              <div class="col-md-1">
                <h6>Sum</h6>
              </div>
            </div>
          </div>
          <div
              class="cart__item"
              v-for="item in items"
          >
            <div class="row">
              <div class="col-lg-6 col-md-5">
                <div class="row">
                  <div class="col-md-3">
                    <img class="product-image" :src="item.img" alt="product">
                  </div>
                  <div class="col-md-9 cart__title">
                    <h4><span class="mobile-title d-md-none">Title:</span> {{item.title}}</h4>
                    <p><span class="mobile-title d-md-none">Category:</span> {{item.category}}</p>
                  </div>
                </div>
              </div>
              <div class="col-md-1 d-flex align-items-center">
                <p class="cart__item-data mb-md-0"><span class="mobile-title d-md-none">Price:</span> ${{item.price}}</p>
              </div>
              <div class="col-md-1 d-flex align-items-center">
                <p class="cart__item-data mb-md-0"><span class="mobile-title d-md-none">Number:</span> {{item.counter}}</p>
              </div>
              <div class="col-md-1 d-flex align-items-center">
                <p class="cart__item-data mb-md-0"><span class="mobile-title d-md-none">Sum:</span> ${{parseFloat(item.sum).toFixed(2)}}</p>
              </div>
              <div class="col-lg-3 col-md-4 d-flex align-items-center">
                <div class="button-wrapper">
                  <button
                      class="default-button"
                      @click="removeFromCart(item)"
                  >Remove from cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2 offset-lg-1 cart__total">
        <h2>Cart Total:</h2>
        <h3>$ {{parseFloat(totalSum).toFixed(2)}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      items () {
        return this.$store.state.cartProducts
      },
      totalSum: function () {
        let sum = 0
        for (let i = 0; i < this.$store.state.cartProducts.length; i++) {
          sum += this.$store.state.cartProducts[i]['sum']
        }
        return sum.toString()
      }
    },
    methods: {
      removeFromCart (item) {
        this.$store.state.cartProducts.splice(this.$store.state.cartProducts.indexOf(item), 1)
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/cart.scss';
</style>

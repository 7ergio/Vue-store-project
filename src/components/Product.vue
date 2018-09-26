<template>
  <v-container>
        <h1 class="text--primary mb-3">Single product</h1>

        <div class="single-product" v-if="product">
          <div class="single-product__item">
            <div class="row">
              <div class="col-md-5">
                <div class="single-product__image-wrapper">
                  <div
                      class="exclusive-label"
                      v-if="product.isExclusive"
                  >
                    <span>Exclusive</span>
                  </div>
                  <img class="product-image" :src="product.img" alt="product">
                </div>
              </div>
              <div class="col-md-7">
                <h2 class="single-product__title">{{product.title}}</h2>
                <p class="single-product__category">{{product.category}}</p>
                <p class="single-product__price">Price: ${{product.price}}</p>
                <p class="single-product__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae
                  natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti
                  eos cupiditate dolore doloribus!</p>
                <div class="button-wrapper single-product__button-wrapper">
                  <router-link to="/" tag="button" class="default-button">Continue shopping</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      product () {
        return this.$store.getters.productById(this.id)
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/single-product.scss';
</style>

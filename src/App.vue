<template>
  <v-app>
    <v-navigation-drawer
        app
        temporary
        v-model="drawer"
        right
    >
      <v-list>
        <v-list-tile
            v-for="link of links"
            :key="link.title"
            :to="link.url"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark color="primary">
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Clothes store</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
            flat
            v-for="link of links"
            :key="link.title"
            :to="link.url"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
          <span
              class="counter"
              v-for="cartItem of cartItems"
          >{{cartItems}}</span>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon
          @click="drawer = !drawer"
          class="hidden-md-and-up"
      ></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import axios from 'axios'

  const JSON_URI = 'https://api.myjson.com/bins/100mm1'

  export default {
    data () {
      return {
        drawer: false,
        links: [
          { title: 'Cart', icon: 'shopping_cart', url: '/cart' }
        ]
      }
    },
    computed: {
      cartItems () {
        return this.$store.state.cartProducts.length
      }
    },
    beforeCreate () {
      axios
        .get(JSON_URI)
        .then((response) => {
          this.$store.state.products = response.data
          this.$store.state.categories = this.$store.state.products.map(item => item.category)
            .filter((value, index, self) => self.indexOf(value) === index)
        })
    }
  }
</script>

<style>
  a:hover {
    text-decoration: none;
  }

  .pointer {
    cursor: pointer;
  }
  
  .counter {
    position: absolute;
    top: -5px;
    left: 20px;
    background: #fff;
    color: #1976d2;
    font-size: 10px;
    width: 15px;
    height: 15px;
    text-align: center;
    border-radius: 50%;
  }
</style>
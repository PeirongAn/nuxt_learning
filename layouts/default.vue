<template>  
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link class="navbar-brand" to="/">News Website</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Headliny by Country</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <nuxt-link
                class="dropdown-item"
                :to="`/headlines/${c.code}`"
                v-for="(c, i) of countries"
                :key="i"
              >{{c.name}}</nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
import { requestsMixin } from "~/mixins/requestsMixin";
const { getData } = require("country-list");

export default {
  mixins: [requestsMixin],
  data() {
    return {
      countries: getData()
    };
  }
};
</script>

<style>
.bg-light {
  background-color: lightcoral !important;
}
</style>
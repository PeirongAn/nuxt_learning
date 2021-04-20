<template>  
  <div class="container">  
    <h1 class="text-center">Home</h1>  
    <div class="card" v-for="(h, i) of headlines" :key="i">  
      <div class="card-body">  
        <h5 class="card-title">{{h.title}}</h5>  
        <p class="card-text">{{h.content}}</p>  
        <button class="btn btn-primary" :href="h.url" target="_blank" variant="primary">Read</button>  
      </div>  
      <img :src="h.urlToImage" class="card-img-bottom" />  
    </div>  
  </div>  
</template>  
<script>  
import { requestsMixin } from "~/mixins/requestsMixin";  
const { getData } = require("country-list");

export default {  
  mixins: [requestsMixin],  
  data() {  
    return {  
      headlines: []  
    };  
  },  
  beforeMount() {  
    this.getHeadlinesByCountry();  
  },  
  methods: {  
    async getHeadlinesByCountry() {  
      const { data } = await this.getHeadlines("us");  
      this.headlines = data.articles;  
    }  
  }  
};  
</script>

<style>  
</style>
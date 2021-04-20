<template>  
  <div class="container">  
    <h1 class="text-center">Headlines in {{getCountryName()}}</h1>  
    <div v-if="headlines.length > 0">  
      <div class="card" v-for="(h, i) of headlines" :key="i">  
        <div class="card-body">  
          <h5 class="card-title">{{h.title}}</h5>  
          <p class="card-text">{{h.content}}</p>  
          <button class="btn btn-primary" :href="h.url" target="_blank" variant="primary">Read</button>  
        </div>  
        <img :src="h.urlToImage" class="card-img-bottom" />  
      </div>  
    </div>  
    <div v-else>  
      <h2 class="text-center">No headlines found.</h2>  
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
      headlines: [],  
      countries: getData()  
    };  
  },  
  beforeMount() {  
    this.getHeadlinesByCountry();  
  },  
  methods: {  
    async getHeadlinesByCountry() {  
      this.country = this.$route.params.countryCode;  
      const { data } = await this.getHeadlines(this.country);  
      this.headlines = data.articles;  
    }, 

    getCountryName() {  
      const country = this.countries.find(  
        c => c.code == this.$route.params.countryCode  
      );  
      return country ? country.name : "";  
    }  
  }  
};  
</script>
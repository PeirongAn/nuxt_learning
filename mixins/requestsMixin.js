const APIURL = "https://newsapi.org/v2";  
const axios = require("axios");
export const requestsMixin = {  
  methods: {  
    getHeadlines(country) {  
      return axios.get(  
        `${APIURL}/top-headlines?country=${country}&apiKey=${process.env.VUE_APP_APIKEY}`  
      );  
    }, getEverything(keyword) {  
      return axios.get(  
        `${APIURL}/everything?q=${keyword}&apiKey=${process.env.VUE_APP_APIKEY}`  
      );  
    }  
  }  
};
const app = require('express')();
const axios = require('axios');
const APIURL = "https://newsapi.org/v2";  

app.get('/headlines', (req, res) => {
    const apiKey = req.query.apiKey ? req.query.apiKey: 'b50d4b2209164b98a6ceebb01b9364d9';
    const country = req.query.country ? req.query.country : 'CN';
    axios.get(
        `${APIURL}/top-headlines?country=${country}&apiKey=${apiKey}`
    ).then(
        (r) => {
            res.json(r.data);
        }
    ).catch(
        (e) => {
            res.json({error: e})
        }
    )
})
app.get('/everything', (req, res) => {
    const apiKey = req.query.apiKey ? req.query.apiKey: 'b50d4b2209164b98a6ceebb01b9364d9';
    const keyword = req.query.keyword ? req.query.keyword : 'CN';
    axios.get(
        `${APIURL}/everything?q=${keyword}&apiKey=${apiKey}`
    ).then(
        (r) => {
            res.json(r.data);
        }
    ).catch(
        (e) => {
            res.json({error: e})
        }
    )
})

module.exports = {
  path: 'api',
  handler: app
}
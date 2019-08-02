const express = require('express');
const bodyParser = require('body-parser');
// const fetch = require('node-fetch');


const summoners = require('./routes/api/summoners')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/summoners', summoners)

app.get("/", (req, res) => res.send('Hello World'));
// app.get('/api/summoner', (req, res) => {
//     const url = 'https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/gedCitizen'
//     const headers = {
//         "Origin": null,
//         "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
//         "X-Riot-Token": "RGAPI-f3187c1b-d096-4299-9097-5114e33dc5bb",
//         "Accept-Language": "en-GB,en;q=0.5",
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0"
//     };
//     fetch(url, { method: 'GET', headers: headers})
//         .then(response => {
//             return response.json();
//         }).then( (jsonData)=> {
//             res.send(jsonData)
//         })
//         .catch(err => res.status(404).json(err))
// })

const port = 4000;


app.listen(port, () => console.log(`Server is running on port ${port}`))
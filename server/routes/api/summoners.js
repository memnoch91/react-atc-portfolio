const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const headers = {
    "Origin": null,
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Riot-Token": "RGAPI-190cfc6d-2967-4796-9968-99f31a280a38",
    "Accept-Language": "en-GB,en;q=0.5",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0"
};

const loleun1Api = "https://eun1.api.riotgames.com"

//req: request, res: response
router.get('/:summonerName', (req, res) => {
    const summonerName = req.params.summonerName;
    const leagueV4Root = () => (`${loleun1Api}/lol/summoner/v4/summoners`);
    const url = `${leagueV4Root()}/by-name/${summonerName}`;

    fetch(url, { method: 'GET', headers: headers })
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            res.send(jsonData);
        })
        .catch(err => res.status(404).json(err));
});
//is it easyer to  refactor code if I write it like so?  e.g.: urlEntriesSummonerV4Root
router.get('/entries/:encryptedAccountId', (req, res) => {
    const encryptedAccountId = req.params.encryptedAccountId;
    const leagueV4Root = () => (`${loleun1Api}/lol/league/v4/entries`);
    const url = `${leagueV4Root()}/by-summoner/${encryptedAccountId}`;
    fetch(url, { method: 'GET', headers: headers })
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            res.send(jsonData);
        })
        .catch(err => res.status(404).json(err));
});
/*eqParams will be an object shaped as such: 
 {
    queue: String,     probably "RANKED_TFT"
    tier: String,      probably "PLATINUM"
    division: String,  i.e. rank - "IV" 
 }
*/
router.get('/queue-entries/:queueObj', (req, res) => {
    console.log(req.params.queueObj)
    const { queue, tier, division } = req.params.queueObj;
    const leagueV4Root = () => (`${loleun1Api}/lol/league/v4/entries`);
    const url = `${leagueV4Root()}/${queue}/${tier}/${division}`;

    fetch(url, { method: "GET", headers: headers })
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            res.send(jsonData);
        })
        .catch(err => res.status(404).json(err));
})
module.exports = router;


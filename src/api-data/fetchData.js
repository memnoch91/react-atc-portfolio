import axios from "axios";

export async function geEUNWtSmmonerBySummonerName(summonerName) {
    const url = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`
    try {
        const summoner = await axios.get(url);
        console.log(summoner)
        return JSON.parse(summoner);
    } catch (error) {
        console.error(error)
    }
}
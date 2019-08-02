import axios from "axios";

export async function geEUNWtSmmonerBySummonerName() {
    const url = `/summoner`
    try {
        const summoner = await axios.get(url);
        console.log(summoner)
        return JSON.parse(summoner);
    } catch (error) {
        console.error(error)
    }
}
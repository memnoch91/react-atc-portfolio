import React from 'react'
import axios from 'axios'


import SummonerContext from '../primary-shared-structures/SummonerContext';
import HighLightSection from './HighLightSection'

/* CSS */
/**
 * center-div stands for 'flex-justify-content-center' !!!flex flow row;
 * facc stands for 'flex-align-cont-center' !!! flex flow column;
 */
import './summoner-styles.scss'


export default class SummonerPage extends React.Component {
    state = {
        summoner: '',
        loading: '',
        searchQuery: 'gedCitizen',
        summonerEntries: '',
        summonerQueue: ''
    };

    componentDidMount() {
        const summonerName = this.state.searchQuery
        axios.get(`/summoners/${summonerName}`)
            .then(res => {
                this.setState({
                    summoner: res,
                })
            })
            .then(() => {
                const summonerId = this.state.summoner.data.id
                axios.get(`/summoners/entries/${summonerId}`)
                    .then(res => {
                        this.setState({
                            summonerEntries: res.data[0]
                        })
                        console.log(this.state.summonerEntries)
                    })
                    .catch(err => console.error(err))
            })
            .then((res) => {
                const { queueType, tier, rank } = this.state.summonerEntries;
                const params = {
                    queue: queueType,
                    tier: tier,
                    division: rank
                }
                console.log(res)
                axios.get(`/summoners/queue-entries/${params}`)
                    .then(res => {
                        this.setState({
                            summonerQueue: res.data
                        })
                    })
                    .catch(err => console.error(err))

            })
            .catch(err => console.error(err))
    }


    render() {
        return (
            <SummonerContext.Provider value={{
                summoner: this.state.summoner.data,
                summonerEntries: this.state.summonerEntries
            }} >
                <SummonerContext.Consumer>
                    {({ summoner, summonerEntries }) => {
                        const loading = () => (<div>loading</div>);
                        const haveSummoner = summoner ? summoner : loading
                        const { wins, tier, rank, losses } = summonerEntries ? summonerEntries : loading;
                        const imgLinkRoot = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon"
                        return (
                            <div className="container facc">
                                <div className="columns is-multiline is-marginless">
                                    <div className="column is-full ">
                                        <figure className="image is-64x64 center-div">
                                            <img className="is-rounded" src={`${imgLinkRoot}/${haveSummoner.profileIconId}.png`} alt="" />
                                        </figure>
                                    </div>
                                    <div className="column is-full has-text-centered">
                                        <h2 className="title is-3" >{haveSummoner.name}</h2>
                                    </div>
                                </div>
                                <HighLightSection wins={wins} tier={tier} rank={rank} losses={losses} />
                            </div>
                        )
                    }}
                </SummonerContext.Consumer>
            </SummonerContext.Provider>

        )
    }
}

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

import { geEUNWtSmmonerBySummonerName } from './api-data/fetchData'

import PrimaryLayout from './app-structure/primary-shared-structures/PrimaryLayout'

export default class App extends React.Component {

  state = {
    summoner: ''
  };

  componentDidMount() {
    geEUNWtSmmonerBySummonerName('gedCitizen').then( res => {
      console.log(res)
      this.setState({
        summoner: res
      })
    })
  }
  
  render() {
    return (
      <Router>
        <PrimaryLayout />
      </Router>
    )
  }
}

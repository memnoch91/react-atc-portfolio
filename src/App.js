import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import axios from 'axios'

import PrimaryLayout from './app-structure/primary-shared-structures/PrimaryLayout'

export default class App extends React.Component {

  state = {
    summoner: '',
    searchQuery:"gedCitizen"
  };

  componentDidMount() {
    const summonerName = this.state.searchQuery
    axios.get(`/summoners/${summonerName}`)
      .then(res => {
        this.setState({
          summoner: res,
        });
      })
      .catch(err => console.error(err))
  }

  me = () =>{
    return "me"
  }

  render() {
    return (
      <Router>
        <PrimaryLayout />
      </Router>
    )
  }
}

import React from 'react';
import { Route, Link } from "react-router-dom"

import Game from '../TTTgame/Game'
import DevTo from '../Portfolio/DevTo/DevTo'
import Header from './Header'

const PrimaryLayout = function ({ children }) {

    return (
        <div className="app-wrapper">
            <Header className="primary-header">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/game">TTT Game</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </Header>
            <div className="primary-content">
                <Route path="/" exact component={() => <div><h1>Home</h1></div>} />
                <Route path="/game/" exact component={Game} />
                <Route path="/portfolio" exact component={DevTo} />
            </div>
            <footer className="primary-footer">
                <ul>
                    <li><button href="#">aaa</button></li>
                    <li><button href="#">bbb</button></li>
                </ul>
            </footer>
        </div>
    )
}

export default PrimaryLayout
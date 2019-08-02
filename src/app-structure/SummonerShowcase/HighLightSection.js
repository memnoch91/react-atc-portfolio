import React from 'react'
import customStyle from './Summoner-page.module.scss'


export default function HighLightSection( {wins, tier, rank , losses}) {
    return (
        <section className="columns is-multiline is-marginless">
            <div className="column is-one-third">
                <div className={`box center-div + ${customStyle["custom-box"]}`}>
                    <div className="columns is-multiline is-marginless">
                        <h3 className="column is-full has-text-centered box-column"> Wins </h3>
                        <p className="column is-full has-text-centered box-column">{wins}</p>
                    </div>
                </div>
            </div>
            <div className="column is-one-third">
                <div className={`box center-div + ${customStyle["custom-box"]}`}>
                    <div className="columns is-multiline is-marginless">
                        <p className="column is-full has-text-centered box-column">{tier}</p>
                        <p className="column is-full has-text-centered box-column">{rank}</p>
                    </div>
                </div>
            </div>
            <div className="column is-one-third">
                <div className={`box center-div + ${customStyle["custom-box"]}`}>
                    <div className="columns is-multiline is-marginless">
                        <h3 className="column is-full has-text-centered box-column"> Losses </h3>
                        <p className="column is-full has-text-centered box-column">{losses}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

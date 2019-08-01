import React from 'react';

const Card = function ({ number }) {
    return (
        <div className="column is-one-third">
            <div className="box box-custom">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img src="https://i.imgur.com/St95Jdv.jpg" alt="bunny" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <h2>Bunny Rabbit</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel maxime aspernatur! Fuga nulla, rem corrupti soluta accusamus nemo voluptas repellat, dolorem autem, deserunt eius consequuntur numquam architecto. Qui, itaque.
                        </p>
                            <button className="button is-link">Learn More</button>
                            <p>{number}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Card;
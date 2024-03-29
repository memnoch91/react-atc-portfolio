import React from 'react'

import styles from './Game.module.scss'


function Square(props) {
    return (
        <button className={styles["square"]} onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

export default Square
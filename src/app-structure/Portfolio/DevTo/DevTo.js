import React from 'react';

import Card from './Card';
import WizardForm from './WizardForm'

export default class DevTo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mockArray: Array(3).fill(" "),
        }
    }


    render() {
        const mocksBxes = this.state.mockArray.map((card, index) => {
            return (
                <Card number={index} key={index} />
            )
        });


        return (
            <section className="columns is-marginless is-multiline">
                {mocksBxes}
                <WizardForm />
            </section>
        )
    }
}
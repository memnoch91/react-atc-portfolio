import React, { Component } from 'react';

import wizardFormService from './data/wizardFormService'

import Step from './Step'

export default class WizardForm extends Component {

    constructor(props) {
        super(props)
        this.wizardFormService = new wizardFormService();
        this.state = {
            currentStep: 0,
            username: '',
            password: '',
            formData: null,
            prevIsDisabled: true,
            nextIsDisabled: false,
        }
    }

    componentDidMount() {
        this.getItems();
    }

    componentDidUpdate(prevProps, prevState) {
        const currentStep = this.state.currentStep;
        const formLength = this.state.formData.length;
        if (prevState.currentStep !== currentStep) {

            const isPrevDisabled = this.state.currentStep === 0;
            const isNextDisabled = currentStep === (formLength - 1);

            this.setState({
                prevIsDisabled: isPrevDisabled,
                nextIsDisabled: isNextDisabled
            })

            // if (currentStep === (formLength - 1)) {
            //     this.setState({
            //         prevIsDisabled: false,
            //         nextIsDisabled: true
            //     })
            //     return;
            // }

            // if (this.state.currentStep === 0) {
            //     this.setState({
            //         prevIsDisabled: true,
            //         nextIsDisabled: false
            //     })
            //     return;
            // }

            // this.setState({
            //     prevIsDisabled: false,
            //     nextIsDisabled: false
            // })
        }
    }
    getItems = () => {
        this.wizardFormService.retrieveItems()
            .then(formData => {
                this.setState({ formData: formData })
            })
    }
    handeChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    _prev = (event) => {
        event.preventDefault()
        this.setState((state) => {
            return {
                currentStep: state.currentStep - 1,
            }
        });
    }
    _next = (event) => {
        event.preventDefault()
        this.setState((state) => {
            return {
                currentStep: state.currentStep + 1,
            }
        });
    }
    handleSubmit = event => {
        event.preventDefault()
        const { email, username, password } = this.state

        alert(`Your registraion details are: \n
                Email: ${email} \n
                Username: ${username} \n
                Password: ${password} \n
        `)
    }

    render() {
        let formStep

        const prevButton = this.state.formData ? (<button name="prev" disabled={this.state.prevIsDisabled} onClick={this._prev} className="button is-primary">Prev</button>) : (<button className="button is-primary">Not Loaded</button>)
        const nextButton = this.state.formData ? (<button name="next" disabled={this.state.nextIsDisabled} onClick={this._next} className="button is-success">Next</button>) : (<button className="button is-success">Not Loaded</button>)
        if (this.state.formData === null) {
            formStep = (
                <h1>
                    Form Loading
                </h1>
            )
        } else {
            formStep = this.state.formData.map((formItem, index) => {
                return (<Step
                    step={this.state.currentStep}
                    index={index}
                    id={formItem.id}
                    label={formItem.label}
                    name={formItem.name}
                    type={formItem.type}
                    placeholder={formItem.placeholder}
                    key={formItem.id}
                    handleChange={this.handeChange}
                    prev={this._prev}
                />)
            })
        }


        return (
            <form className="column if-full">
                {formStep}
                <div className="buttons" style={{ display: "flex", justifyContent: "space-between" }}>
                    {prevButton}
                    {nextButton}
                    {/* {this.state.currentStep !== 0 ? prevButton : null} */}
                    {/* {this.state.currentStep < (this.state.formData.length -1) ? nextButton : null} */}
                </div>
            </form>
        )
    }
}

    // prevButton = () => {
    //     let currentStep = this.state.currentStep;
    //     if (currentStep === 0) {
    //         return null
    //     } else {
    //         return (
    //             <button name="prev" onClick={this._prev} className="button is-primary">Prev</button>
    //         )
    //     }

    // }

    // nextButton = () => {
    //     let maxInterations = this.state.formData.length;
    //     let currentStep = this.state.currentStep;
    //     if (currentStep >= maxInterations - 1) {
    //         return null
    //     } else {
    //         return (<button name="next" onClick={this._next} className="button is-success">Next</button>)
    //     }
    // }
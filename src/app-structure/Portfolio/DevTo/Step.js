import React from 'react'

import './styles/step.scss'

export default function Step({ step, index, type, name, label, placeholder, id, value, handleChange }) {
    if(step !== index) {
        return false
    }

    return (
        <React.Fragment>
            <p>Step {step + 1}</p>
            <label htmlFor={id}>{label}</label>
            <input
                className="input is-primary"
                id={id}
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={handleChange}
            />
        </React.Fragment>
    )
}

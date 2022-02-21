import React, { useContext, useState } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import './SetPomodoro.scss'

const SetPomodoro = () => {

    const [newTimer, setNewTimer] = useState({
        work: 45,
        short: 10,
        long: 15,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = input => {
        const {name, value} = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    
    return (
        <div className="form-container">
            <form noValidate onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label for="work">
                        WORK
                        <input className="input" type="input" name="work" id="work" onChange={handleChange} value={newTimer.work} />
                    </label>
                    <label for="shortBreak">
                        Short Break
                        <input className="input" type="input" name="shortBreak" id="shortBreak" onChange={handleChange} value={newTimer.short} />
                    </label>
                    <label for="longBreak">
                        Long Break
                        <input className="input" type="input" name="longBreak" id="longBreak" onChange={handleChange} value={newTimer.long} />
                    </label>
                </div>
                <button className='btn' type='submit'>Set Timer</button>
            </form>
        </div>
    )
}

export default SetPomodoro
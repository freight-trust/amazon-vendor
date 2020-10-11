import './Login.css'
import React, {useState} from 'react'
import InputWithLabel from '../input-with-label/InputWithLabel'
import {login} from '../../services/amahack-api.service'
import {Redirect} from 'react-router-dom'

export default function Login({user, onLogIn}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()
        login(email, password)
            .then(loggedInUser => onLogIn(loggedInUser))
            .catch(e => setError('There was an error with the credentials'))
    }

    if (user) {
        return <Redirect to='/product' />
    }

    return (
        <>
            <div className="login">
                {error && <p><strong>Oops</strong> {error}</p>}
                <form onSubmit={onSubmit}>
                    <InputWithLabel
                        value={email}
                        label="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)} />

                    <InputWithLabel
                        value={password}
                        label="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </>
    )
}
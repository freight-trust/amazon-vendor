import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export default function AuthenticateRouter(props) {
    const {user} = props
    if (!user) {
        return <Redirect to='/login' />
    } else {
        return <Route {...props}/>
    }
}
//AuthRouter
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { LoginUI } from '../../components/auth/login/LoginUI'
import { RegisterUI } from '../../components/auth/register/RegisterUI'

export const AuthRouter = () => {
    return (
        <div className="router">
            <div className="router__container py-10">
                <Switch>
                    <Route exact path="/auth/login" component={ LoginUI }/>
                    <Route exact path="/auth/register" component={ RegisterUI }/>
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}

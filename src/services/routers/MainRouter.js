//AppRouter
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import { AuthRouter } from './AuthRouter'
import { MyDayDashboard } from '../../components/App/dashboard/MyDayDashboard'


export const MainRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter }/>
                    <Route exact path="/" component={ MyDayDashboard }/>
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

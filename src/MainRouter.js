import React from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import NavBar from "./components/Navbar/Navbar"
// import Auth from "./components/Auth/Auth"
// import Home from "./components/Home/Home"
// import NotFound from "./components/NotFound/NotFound"

const Home = React.lazy(() => import("./components/Home/Home"))
const Auth = React.lazy(() => import("./components/Auth/Auth"))
const NotFound = React.lazy(() => import("./components/NotFound/NotFound"))

function MainRouter() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path='/sign-up' component={Auth} />
                <Route exact path='/login' component={Auth} />
                <Route exact path='/logout' render={() => <Redirect to='/login' />} />
                <Route exact path='/' component={Home} />

                <Route component={NotFound} />

            </Switch>
        </Router>
    )
}

export default MainRouter
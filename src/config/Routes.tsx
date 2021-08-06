import * as React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Switch>
)

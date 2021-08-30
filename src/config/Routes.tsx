import * as React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'

import Home from '../app/pages/Home'
import Login from '../app/pages/Auth/Login'
import Register from '../app/pages/Auth/Register'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />

    {/* TODO: Add examples routes  */}
  </Switch>
)

export default Routes

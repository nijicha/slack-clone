import * as React from 'react'
import { Route, BrowserRouter as Switch } from 'react-router-dom'

import ForgotPassword from '../app/pages/Auth/ForgotPassword'
import Login from '../app/pages/Auth/Login'
import Register from '../app/pages/Auth/Register'
import Home from '../app/pages/Home'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/forgot-password" component={ForgotPassword} />

    {/* TODO: Add examples routes  */}
  </Switch>
)

export default Routes

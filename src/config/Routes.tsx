import * as React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Blogs from '../pages/Blogs'

import TryReactHooks from '../components/TryReactHooks'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/blogs" component={Blogs} />

    <Route path="/try-react-hooks" component={TryReactHooks} />
  </Switch>
)

export default Routes

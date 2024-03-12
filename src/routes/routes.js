import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Register, Products, Cart, Admin } from '../containers'
import PrivateRoute from './routes-private'
function MyRoutes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Products} path="/produtos" />
        <PrivateRoute component={Cart} path="/carrinho" />

        <PrivateRoute component={Admin} path={paths.Order} isAdmin={true} />
        <PrivateRoute component={Admin} path={paths.Products} isAdmin={true} />
        <PrivateRoute
          component={Admin}
          path={paths.NewProduct}
          isAdmin={true}
        />
      </Switch>
    </Router>
  )
}

export default MyRoutes

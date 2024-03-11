import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

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

        <PrivateRoute component={Admin} path="/pedidos" isAdmin={true} />
        <PrivateRoute
          component={Admin}
          path="/listar-produtos"
          isAdmin={true}
        />
      </Switch>
    </Router>
  )
}

export default MyRoutes

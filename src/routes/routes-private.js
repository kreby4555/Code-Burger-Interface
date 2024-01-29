import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'
function PrivateRoute({ component, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Redirect to="/login" />
  }
  return <Route component={component} />
}

export default PrivateRoute

PrivateRoute.proTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

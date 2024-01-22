import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './containers/Login'
import Register from './containers/Register'
import GlobalStyles from './Style/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <>
      <Register />
      <GlobalStyles />
    </>
  </React.StrictMode>
)

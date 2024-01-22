import React, { createContext, useContext } from 'react'

import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const user = { name: 'Cleber', agge: 22 }
  const newUser = { name: 'Cleber', agge: 22 }
  const outroUser = { name: 'Cleber', agge: 22 }

  return (
    <UserContext.Provider value={{ user, newUser, outroUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const contex = useContext(UserContext)

  if (!contex) {
    throw new Error('useUser must be used with UserContext')
  }
  return contex
}

UserProvider.propTypes = {
  children: PropTypes.node
}

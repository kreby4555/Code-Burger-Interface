import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'

import { useUser } from '../../hooks/UserContext'
import lislinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuadmin({ path }) {
  const { logout } = useUser()
  return (
    <Container>
      <hr></hr>
      {lislinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'absolute', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#ffffff' }} />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  )
}

SideMenuadmin.prototypes = {
  path: PropTypes.string
}

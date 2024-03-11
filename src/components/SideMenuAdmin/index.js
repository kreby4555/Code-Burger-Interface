import React from 'react'

import lislinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuadmin() {
  return (
    <Container>
      <hr></hr>
      {lislinks.map(item => (
        <ItemContainer key={item.id}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
    </Container>
  )
}

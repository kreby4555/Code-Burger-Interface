import React from 'react'

import { SideMenuadmin } from '../../components'
import Orders from './Orders'
import { Container } from './styles'

export function Admin() {
  return (
    <Container>
      <SideMenuadmin />
      <Orders />
    </Container>
  )
}

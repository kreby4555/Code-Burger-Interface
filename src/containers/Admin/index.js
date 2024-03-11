import React from 'react'

import { SideMenuadmin } from '../../components'
import ListProducts from './ListProducts'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'
export function Admin() {
  return (
    <Container>
      <SideMenuadmin />
      <ContainerItems>
        {/* <Orders /> */}
        <ListProducts />
      </ContainerItems>
    </Container>
  )
}

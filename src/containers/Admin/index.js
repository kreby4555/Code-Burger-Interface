import React from 'react'

import PropTypes from 'proptypes'

import { SideMenuadmin } from '../../components'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'
export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuadmin />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
      </ContainerItems>
    </Container>
  )
}

Admin.prototypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}

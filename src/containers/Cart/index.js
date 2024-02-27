import React from 'react'

import CartLogo from '../../assets/cart.svg'
import { CartItens } from '../../components'
import { Container, CartImg } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="Logo da Cart" />
      <CartItens />
    </Container>
  )
}

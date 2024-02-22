import React from 'react'

import PropTypes from 'prop-types'

import { Button } from '../../components'
import { useCart } from '../../hooks/CartContext'
import { Container, Image, ParagrafoName, ParagrafoPrice } from './styles'
export function CardProducts({ product }) {
  const { putProductInCart } = useCart()
  return (
    <Container>
      <Image src={product.url} alt="Imagem do produto" />
      <div>
        <ParagrafoName>{product.name}</ParagrafoName>
        <ParagrafoPrice>{product.formatedPrice}</ParagrafoPrice>
        <Button onClick={() => putProductInCart(product)}>Adicionar</Button>
      </div>
    </Container>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}

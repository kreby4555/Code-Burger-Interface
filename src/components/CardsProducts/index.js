import React from 'react'
import { useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Button } from '../../components'
import { useCart } from '../../hooks/CartContext'
import { Container, Image, ParagrafoName, ParagrafoPrice } from './styles'
export function CardProducts({ product }) {
  const { putProductInCart } = useCart()
  const { push } = useHistory()
  return (
    <Container>
      <Image src={product.url} alt="Imagem do produto" />
      <div>
        <ParagrafoName>{product.name}</ParagrafoName>
        <ParagrafoPrice>{product.formatedPrice}</ParagrafoPrice>
        <Button
          onClick={() => {
            putProductInCart(product)
            push('/carrinho')
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}

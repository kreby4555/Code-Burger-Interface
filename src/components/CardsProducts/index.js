import React from 'react'

import PropTypes from 'prop-types'

import Button from '../Button'
import { Container, Image, ParagrafoName, ParagrafoPrice } from './styles'
function CardProducts({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="Imagem do produto" />
      <div>
        <ParagrafoName>{product.name}</ParagrafoName>
        <ParagrafoPrice>{product.formatedPrice}</ParagrafoPrice>
        <Button>Adicionar</Button>
      </div>
    </Container>
  )
}

export default CardProducts

CardProducts.propTypes = {
  product: PropTypes.object
}

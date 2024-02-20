import React from 'react'

import PropTypes from 'prop-types'

import { Button } from '../../components'
import { Container, Image, ParagrafoName, ParagrafoPrice } from './styles'
export function CardProducts({ product }) {
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

CardProducts.propTypes = {
  product: PropTypes.object
}

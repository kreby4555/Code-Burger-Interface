import React from 'react'

import Category from '../../assets/category.png'
import { Container, CategoryImg } from './styles'

function Home() {
  return (
    <Container>
      <CategoryImg src={Category} alt="Logo da home" />
    </Container>
  )
}

export default Home

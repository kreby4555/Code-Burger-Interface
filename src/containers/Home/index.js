import React from 'react'

import HomeLogo from '../../assets/logo-home.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import { Container, HomeImg } from './styles'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="Logo da home" />
      <CategoryCarousel />
    </Container>
  )
}

export default Home

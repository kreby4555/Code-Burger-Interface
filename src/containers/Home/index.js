import React, { useEffect } from 'react'

import HomeLogo from '../../assets/logo-home.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import api from '../../services/api'
import { Container, HomeImg } from './styles'

function Home() {
  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories')
      console.log(response)
    }
    loadCategories()
  })

  return (
    <Container>
      <HomeImg src={HomeLogo} alt="Logo da home" />
      <CategoryCarousel />
    </Container>
  )
}

export default Home

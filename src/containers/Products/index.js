import React, { useEffect, useState } from 'react'

import ProductLogo from '../../assets/product-logo.svg'
import api from '../../services/api'
import { Container, ProductImg, CategoryButton, CategoriesMenu } from './styles'

function Product() {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategories)
    }
    loadCategories()
  }, [])
  return (
    <Container>
      <ProductImg src={ProductLogo} alt="Logo da home" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isCativeCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
    </Container>
  )
}

export default Product

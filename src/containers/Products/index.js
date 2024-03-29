import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import ProductLogo from '../../assets/product-logo.svg'
import { CardProducts } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductImg,
  CategoryButton,
  CategoriesMenu,
  ProductContainer
} from './styles'

export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }
    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilterProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductImg src={ProductLogo} alt="Logo da home" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductContainer>
        {filterProducts &&
          filterProducts.map(product => (
            <CardProducts key={product.id} product={product} />
          ))}
      </ProductContainer>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}

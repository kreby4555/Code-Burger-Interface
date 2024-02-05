import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Offers from '../../assets/offer.png'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles'
function OffersCarousel() {
  const [offers, setOffers] = useState([])
  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')
      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })
      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
    { width: 1450, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Offers} alt="Logo da oferta" />
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="Foto do produto" />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <Button>Peça Agora</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}

export default OffersCarousel

import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/cartItems.svg'
import Person from '../../assets/conta.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRigh,
  PageLink,
  ContainerText,
  Line,
  PageLinkExit
} from './styles'

export function Header() {
  const { logout } = useUser()

  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRigh>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={Cart} alt="Carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="Usuário logado" />
        </PageLink>

        <ContainerText>
          <p>Olá, Cleber</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRigh>
    </Container>
  )
}

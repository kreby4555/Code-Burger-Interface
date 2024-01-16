import React from 'react'

import LoginImg from '../../assets/Hamburger-Login.svg'
import Logo from '../../assets/Logo.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="login-logo" />
        <h1>Login</h1>
        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Sign In</Button>
        <SignInLink>
          Não possui conta ? <a>Sing Up</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login

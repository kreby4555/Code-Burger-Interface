import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImg from '../../assets/Hamburger-Login.svg'
import Logo from '../../assets/Logo.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  ErrorMenssage,
  Button,
  SignInLink
} from './styles'

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-amil válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter no min 6 caracteres até no  max 12')
      .max(12, 'A senha só pode ir até 12 caracteres')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="login-logo" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMenssage>{errors.email?.message}</ErrorMenssage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMenssage>{errors.password?.message}</ErrorMenssage>

          <Button type="submit">Sign In</Button>
        </form>

        <SignInLink>
          Não possui conta ? <a>Sing Up</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login

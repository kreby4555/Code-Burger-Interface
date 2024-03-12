import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import ReactSelect from 'react-select'

import { Button } from '../../../components/Button'
import api from '../../../services/api'
import { Container, Label, Input } from './styles'

function NewProduct() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')
    }

    loadOrders()
  }, [])

  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />

        <Label>Upload</Label>
        <Input type="file" accept="image/png, image/jpeg" />

        <ReactSelect />

        <Button>Adicionar Produtos</Button>
      </form>
    </Container>
  )
}

export default NewProduct

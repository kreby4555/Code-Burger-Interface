import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import ReactSelect from 'react-select'

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'

import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'

function NewProduct() {
  const [filename, setFileName] = useState(null)
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

        <LabelUpload>
          {filename || (
            <>
              <DriveFolderUploadIcon />
              Carregue a imagem do produto
            </>
          )}

          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>

        <ReactSelect />

        <ButtonStyles>Adicionar Produtos</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewProduct

import React from 'react'

import PropTypes from 'prop-types'

import { ErrorMenssageStyles } from './styles'

export function ErrorMenssage({ children }) {
  return <ErrorMenssageStyles>{children}</ErrorMenssageStyles>
}

ErrorMenssage.propTypes = {
  children: PropTypes.string
}

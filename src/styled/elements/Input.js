// styled-components based extension
import React from 'react'
import styled from 'styled-components'
import { Box } from '@magicsoup.io/stock'

const Input = styled(Box)`
`

Input.defaultProps = {
  as: 'input',
  fontSize: 2,
  my: 2,
  p: 3,
}

export default Input
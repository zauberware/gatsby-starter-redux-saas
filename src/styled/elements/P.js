// styled-components based extension
import React from 'react'
import styled from 'styled-components'
import { Text } from '@magicsoup.io/stock'
import { themeGet } from 'styled-system'

const P = styled(Text)`
  line-height: 1.55;
  strong{
    font-weight: 700;
  }
`

P.defaultProps = {
  as: 'p',
  mt: 3,
  mb: 0,
  p: 0,
}

export default P
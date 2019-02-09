// styled-components based extension
import styled from 'styled-components'
import { Box } from '@magicsoup.io/stock'

const Footer = styled(Box)`
  a{
    color: white;
    text-decoration: underline;
  }
`

Footer.defaultProps = {
  as: 'footer',
  bg: 'primary',
}

export default Footer
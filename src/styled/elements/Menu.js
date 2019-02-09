import styled, { css } from 'styled-components'
import { themeGet } from 'styled-system'
import { Box, Text } from '@magicsoup.io/stock'
import { Link as GatsbyLink } from "gatsby"

const Menu = styled(Box)(props => css`
  background-color: ${themeGet('colors.primary', 'purple')};
  font-family: ${themeGet('fonts.sans', 'Arial')};
  position: fixed;
  width: 100%;
  display: flex;
  transition: background-color 300ms linear;
  z-index: 1000;
`)

Menu.defaultProps = {
  as: 'nav'
}

export default Menu

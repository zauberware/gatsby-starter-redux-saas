import React, { Fragment } from 'react'
import { css, createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { themeGet } from 'styled-system'

const GlobalStyle = createGlobalStyle(props => css`
  ${styledNormalize}
  
  body {
    font-size: 17px;
    font-family: ${props.theme.fonts.sans};
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-weight: 400;
    overflow-x: hidden;
    width: 100%;
  }

  a{
    color: ${themeGet('colors.primary')};
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }
  }

  code{
    font-size: 0.95rem;
    font-weight: 300;
    padding: 3px;
    margin: 0 3px;
    border-radius: 4px;
    line-height: 1;
    background-color: ${themeGet('colors.greyLight')};
  }

`)
export default () => (
  <Fragment>
    <GlobalStyle />
  </Fragment>
)

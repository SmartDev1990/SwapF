import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url('/public/images/bg.png');

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle

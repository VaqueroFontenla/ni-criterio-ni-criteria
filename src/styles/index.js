import { css, createGlobalStyle } from "styled-components"
import { reset } from "./reset"

export const size = {
  small: 400,
  medium: 480,
  mediumL: 960,
  large: 1140,
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const GlobalStyles = createGlobalStyle`
  ${reset};
  
  .___gatsby{
    position: absolute;
  }
  body{
    font-family: "Manrope", sans-serif;
    font-size: 16px; 
    color: #171717;
    background-color:#f6f8f9;
    box-sizing: border-box;
  }

  h1 {
    margin: 0; 
  }

  h2 {
    margin: 0;
  }
`

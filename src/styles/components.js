import styled from "styled-components"
import { above } from "./index"
import Clapperboard from "../images/clapperboard.webp"

export const colors = {
  green: "#98ca3f",
  orange: "#f8b71c",
  black: "#171717",
  gray: "#969696",
  darkBlue: "#1c3643",
  lightBlue: "#1e5372",
  softGray: "#f6f8f9",
}

export const StyledHeader = styled.header`
  background-image: linear-gradient(
    90deg,
    ${colors.darkBlue},
    ${colors.lightBlue}
  );
  margin-bottom: 0;
  padding: 0 0.5rem 0 0;
  height: 3.5rem;
  width: 100%;
  max-width: 960;
  display: flex;
  position: fixed;
  z-index: 3;
  align-items: center;
  justify-content: space-between;
  a {
    height: 100%;
    font-size: 0.6rem;
  }
  & > a > img {
    margin: 0;
    background-color: ${colors.green};
    height: 100%;
    padding: 0.5rem 0.8rem;
  }
  & ul {
    list-style: none;
    margin: 0;
    display: flex;
    font-size: 0.2rem;
  }
  ${above.medium`
    padding: 0 2rem;
    height: 3.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
  ${above.large`
    padding: 0 10rem;
    height: 4.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
`
export const StyledJumbo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.darkBlue};
  font-weight: 700;
  position: relative;
  min-height: calc(100vh - 3.5rem); /* Tamaño menú de cabecera */
  :before {
    content: "";
    background-image: linear-gradient(
        rgba(28, 54, 67, 0.2),
        rgba(30, 83, 114, 0.8)
      ),
      url(${Clapperboard});

    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;
  }
  span {
    font-size: 2rem;
    svg {
      width: 3rem;
      height: 3rem;
      justify-self: center;
    }
  }

  div {
    position: relative;
    display: grid;
    row-gap: 2rem;
    justify-content: center;

    padding: 2rem;
    text-align: center;
  }
`

export const StyledSuggestions = styled.div`
  background-color: ${colors.softGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  margin-top: 3.5rem;
  padding: 2rem 1rem 5rem 1rem;

  h2 {
    color: ${colors.darkBlue};
    font-size: 2rem;
  }
  section {
    width: 100%;
    height: 100%;

    ${above.medium`
      column-count: 2;
      column-gap: 3rem;
      `};
    ${above.mediumL`
      column-count: 3;
      `};
    ${above.large`
      padding: 0 10rem;
      column-count: 4;
    `};
  }
`

export const StyledSuggestion = styled.article`
  display: inline-flex;
  flex-direction: column;
  background: white;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 0.25rem;
  margin-bottom: 3rem;
  width: 100%;

  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`
export const StyledSuggestionInfo = styled.div`
  display: grid;
  row-gap: 1rem;

  padding: 1rem;
  width: 100%;

  > div {
    p {
      color: ${colors.green};
      font-weight: bold;
      font-size: 1.5rem;
      margin: 0;
    }
    small {
      color: ${colors.darkBlue};
      font-weight: 500;
      font-size: 1rem;
    }
  }

  a {
    justify-self: end;
    text-decoration: none;
    color: ${colors.darkBlue};
    font-size: 1rem;
    text-align: end;
    border-bottom: 3px solid ${colors.green};
    span {
      color: ${colors.green};
    }
  }
`

export const StyledSuggestionDetailWrapper = styled.div`
  display: grid;
  row-gap: 1rem;
  grid-template-rows: auto 1fr;
  align-items: start;

  padding: 1rem;

  a {
    justify-self: start;
    text-decoration: none;
    color: ${colors.black};
    border-bottom: 3px solid ${colors.green};

    span {
      font-size: 2rem;
      color: ${colors.green};
    }

    ${above.mediumL`
    justify-self: end;
  `}
  }

  ${above.mediumL`
  padding: 1rem 3rem;

  `}
  ${above.large`
    padding: 2rem 10rem;
  `}
`
export const StyledSuggestionDetail = styled.div`
  ${above.mediumL`
  display: grid;
  grid-template-columns: 1fr 2fr;
  `}
`
export const StyledSuggestionDetailInfo = styled.div`
  display: grid;
  row-gap: 1rem;
  align-content: start;
  padding: 2rem 0;
  > span {
    justify-self: start;
    align-self: center;
  }

  > div > span {
    font-weight: 700;
  }

  ${above.mediumL`
    padding: 2rem;
  `}
`

export const StyledSuggestionDetailDescription = styled.div`
  display: grid;
  row-gap: 0.5rem;
  > span {
    font-weight: 700;
  }
`

export const Footer = styled.footer`
  background-color: ${colors.darkBlue};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  bottom: 0;
  a {
    color: ${colors.green};
    margin-left: 0.3rem;
    text-decoration: none;
  }
`

export const Tag = styled.span`
  padding: 0.3rem 1.5rem;
  background-color: ${colors.gray};
  display: inline-block;
  color: white;
  border-radius: 5px;
  font-weight: 700;
`

export const StyledScrollToTopButton =
  styled.button <
  { isVisible } >
  `
  display: ${p => (p.isVisible ? "block" : "none")};

  position: fixed;
  bottom: 2rem;
  right:1.5rem;

  background-color: ${colors.darkBlue};
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;

  height: 3rem;
  width:3rem;

  ${above.mediumL`
    cursor: pointer;
    transition: all 0.3s ease 0s;
    :hover {
      background-color: ${colors.lightBlue};
      cursor: pointer;
  
      transform: translateY(0.5rem);
    }
  `}
`

import styled, { css } from "styled-components"
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

  padding: 0 0.5rem 0 0;
  height: 4rem;
  width: 100%;

  position: fixed;
  top: 0;
  z-index: 1;

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

  ${above.medium`
    padding: 0 2rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
  ${above.large`
    padding: 0 10rem;
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
  min-height: calc(100vh - 4rem); /* Tamaño menú de cabecera */
  margin-top: 4rem;
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

  div {
    position: relative;
    display: grid;
    row-gap: 2rem;

    padding: 2rem;
    text-align: center;

    > span {
      justify-self: center;
    }
  }
`

export const StyledIcon = styled.span`
  display: inline-block;
  width: ${p => `${p.size}rem`};
  height: ${p => `${p.size}rem`};

  line-height: 0; /* So the icon doesn't move a little lower */

  & > svg {
    transform: ${p => p.reverse && "rotate(180deg)"};
    width: 100%;
    height: 100%;

    & path,
    & polygon {
      fill: ${p => p.color};
    }

    & g[fill="none"] > :not([fill]) {
      stroke: ${p => p.color};
    }
  }

  ${p =>
    !!p.onClick &&
    css`
      cursor: pointer;
    `}
`

export const StyledSuggestions = styled.section`
  padding-top: 4rem;
  > h2 {
    color: ${colors.darkBlue};
    text-align: center;
    font-size: 2rem;
    margin: 2rem 0;
  }
  > div:last-child {
    display: grid;
    row-gap: 1rem;
    background-color: ${colors.softGray};
    padding: 2rem 1rem 5rem 1rem;
    width: 100%;
    height: 100%;

    ${above.medium`
      display: block;
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

export const StyledFilters = styled.div`
  display: grid;
  row-gap: 1rem;
  padding: 0 1rem;
  justify-content: center;

  div {
    justify-self: center;

    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 0.5rem;
    align-items: center;
    border-bottom: 3px solid ${colors.green};

    text-align: center;
    span {
      color: ${colors.darkBlue};
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;

    gap: 1rem;

    border: 1px solid ${colors.green};
    border-radius: 0.25rem;
    padding: 1.5rem;

    li {
      margin: 0;
    }
    ${above.large`
      padding: 0 10rem;
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
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 0.5rem;
    align-items: center;

    text-decoration: none;
    color: ${colors.darkBlue};
    font-size: 1rem;
    text-align: end;
    line-height: 1.5rem;
    border-bottom: 3px solid ${colors.green};
    span {
      color: ${colors.green};
    }
  }
`

export const StyledScrollToTop = styled.button`
  display: ${p => (p.isVisible ? "block" : "none")};

  position: fixed;
  bottom: 2rem;
  right: 1.5rem;

  background-color: ${colors.darkBlue};
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;

  height: 3rem;
  width: 3rem;

  transition: all 0.3s ease 0s;
  :hover {
    background-color: ${colors.corporateBlue};
    cursor: pointer;

    transform: translateY(0.5rem);
  }
`

export const StyledSuggestionDetailWrapper = styled.div`
  display: grid;
  row-gap: 2rem;
  grid-template-rows: auto 1fr;
  align-items: start;

  margin-top: 4rem;
  padding: 1rem;

  a {
    justify-self: start;

    text-decoration: none;
    color: ${colors.black};
    line-height: 1.5rem;
    border-bottom: 3px solid ${colors.green};

    ${above.mediumL`
    justify-self: end;
  `}
  }

  > a {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 0.5rem;
    align-items: center;
  }

  ${above.mediumL`
  padding: 1rem 3rem;

  `}
  ${above.large`
    padding: 2rem 10rem;
    min-height: calc(100vh - 9rem);
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

export const StyledTag = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: ${p => (p.active ? colors.gray : colors.softGray)};
  font-weight: 700;
  text-align: center;

  padding: 1rem;
  background-color: ${p => (p.active ? colors.softGray : colors.gray)};
  border-radius: 5px;
  border: 1px solid ${colors.gray};
  ${p =>
    !!p.onClick &&
    css`
      cursor: pointer;
    `};
`

export const StyledScrollToTopButton = styled.button`
  display: ${p => (p.isVisible ? "block" : "none")};

  position: fixed;
  bottom: 2rem;
  right: 1.5rem;

  background-color: ${colors.darkBlue};
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;

  height: 3rem;
  width: 3rem;

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

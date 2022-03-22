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
export const StyledCart = styled.div`
  padding: 1rem;
  height: 80vh;
  overflow-y: scroll;
  h2 {
    border-bottom: 2px solid ${colors.darkBlue};
    color: ${colors.darkBlue};
  }
  & th {
    color: #959595;
    margin: 0;
    border: none;
  }
  & img {
    vertical-align: middle;
    width: 60px;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${colors.darkBlue};
    div {
      display: flex;
      align-items: baseline;
      width: 250px;
      justify-content: space-between;
    }
  }
  & small {
    color: #505050;
    font-size: 0.9rem;
  }
  ${above.medium`
    padding: 1rem 3rem;
  `}
  ${above.large`
    padding: 5rem 10rem;
  `}
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

export const SizeButton = styled.button`
  padding: calc(0.4rem + 1px);
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: #272727;
  opacity: ${({ unavailable }) => (unavailable ? 0.4 : 1)};
  transition: 0.4s all ease;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.2);
  }
`

export const QtyButton = styled.button`
  padding: 0.4rem;
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
`
export const QtySelect = styled.div`
  display: flex;
  margin: 0.6rem 0;
  button {
    padding: 0 10px;
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, 0.1);
    max-width: 70px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #707070;
  }
  input {
    padding: 0.4rem;
    background-color: transparent;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    border-left: none;
    border-right: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    max-width: 40px;
    max-height: 40px;
  }
`
export const SizeSelect = styled.div`
  display: grid;
  width: 10rem;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  font-size: 0.8rem;
  margin-top: 0.6rem;
  button:nth-child(${props => props.selected}) {
    border: 2px solid rgba(0, 0, 0, 0.3);
  }
`
export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ type }) =>
    type === "outline" ? "transparent" : colors.green};
  color: ${({ type }) => (type === "outline" ? colors.darkBlue : "white")};
  font-size: 0.9rem;
  padding: 0.6rem 1rem;
  font-weight: 500;
  border: ${({ type }) =>
    type === "outline"
      ? `3px solid ${colors.darkBlue}`
      : `3px solid ${colors.green}`};
  border-radius: 12px;
  a {
    text-decoration: none;
    color: ${({ type }) => (type === "outline" ? colors.darkBlue : "white")};
  }
  &:disabled {
    background-color: ${colors.gray};
    border-color: ${colors.gray};
    cursor: not-allowed;
  }
`

export const SelectStars = styled.div`
  span {
    margin: 0 5px;
    color: ${colors.gray};
    cursor: pointer;
  }
  span:nth-child(-n + ${props => props.selected}) {
    color: ${colors.orange};
  }
`
export const Purchase = styled.div`
  width: 100vw;
  height: calc(100vh - 4.5rem - 101px);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.2rem;
  }
  p {
    margin: 2px 0;
  }
  span {
    font-size: 2rem;
  }
`

export const Content = styled.div`
  ${above.medium`
    padding-top: 3.5rem;
    `}
  ${above.large`
    padding-top: 4.5rem;
  `}
`

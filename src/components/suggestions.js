import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { ScrollToTop } from "../components"
import {
  StyledSuggestions,
  StyledSuggestionInfo,
  StyledSuggestion,
} from "../styles/components"

export default function Suggestions({ suggestions }) {
  return (
    <>
      <StyledSuggestions id="suggestions">
        <h2>Recomendaciones</h2>
        <div>
          {suggestions.map(suggestion => (
            <StyledSuggestion key={suggestion.id}>
              <Img
                fluid={suggestion.image.childImageSharp.fluid}
                style={{ width: "100%", maxHeight: "100%" }}
                alt={suggestion.name}
              />
              <StyledSuggestionInfo>
                <div>
                  <p>{suggestion.name}</p>
                  <small>{suggestion.autor}</small>
                </div>
                <Link to={`/${suggestion.id}`}>
                  Ver detalle <span>↪ </span>
                </Link>
              </StyledSuggestionInfo>
            </StyledSuggestion>
          ))}
        </div>
      </StyledSuggestions>
      <ScrollToTop
        onClick={() => {
          typeof window !== "undefined" &&
            window.scroll({
              top: 0,
              behavior: "smooth",
            })
        }}
      />
    </>
  )
}

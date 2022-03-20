import React from "react"
import { Link } from "gatsby"
import {
  StyledSuggestions,
  StyledSuggestionInfo,
  StyledSuggestion,
} from "../styles/components"
import Img from "gatsby-image"

export default function Suggestions({ suggestions }) {
  return (
    <StyledSuggestions>
      <h2>Recomendaciones</h2>
      <section>
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
      </section>
    </StyledSuggestions>
  )
}

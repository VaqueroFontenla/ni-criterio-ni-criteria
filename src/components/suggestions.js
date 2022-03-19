import React from "react"
import { Link } from "gatsby"
import { StyledSuggestions } from "../styles/components"
import Img from "gatsby-image"

export default function Suggestions({ suggestions }) {
  return (
    <StyledSuggestions>
      <h2>Recomendaciones</h2>
      <section>
        {suggestions.map(suggestion => (
          <article key={suggestion.id}>
            <Img
              fluid={suggestion.image.childImageSharp.fluid}
              style={{ width: "100%", height: "350px" }}
              alt={suggestion.name}
            />
            <p>{suggestion.name}</p>
            <Link to={`/${suggestion.id}`}>
              Ver detalle <span>↪ </span>
            </Link>
          </article>
        ))}
      </section>
    </StyledSuggestions>
  )
}

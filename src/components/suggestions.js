import React from "react"
import { Link } from "gatsby"
import { StyledSuggestions } from "../styles/components"

export default function Suggestions({ suggestions }) {
  console.log(suggestions)
  return (
    <StyledSuggestions>
      <h2>Recomendaciones</h2>
      <section>
        {suggestions.map(({ node }) => (
          <article key={node.id}>
            <img src={node.image} alt={node.name} />
            <p>{node.name}</p>
            <Link to={`/${node.id}`}>
              Ver detalle <span>↪ </span>
            </Link>
          </article>
        ))}
      </section>
    </StyledSuggestions>
  )
}

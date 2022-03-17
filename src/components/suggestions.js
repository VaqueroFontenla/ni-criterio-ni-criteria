import React from "react"
import { Link } from "gatsby"
import { StyledSuggestions } from "../styles/components"

export default function Suggestions({ suggestions, images }) {
  console.log(suggestions)
  console.log(images)
  return (
    <StyledSuggestions>
      <h2>Recomendaciones</h2>
      <section>
        {suggestions.map(({ node }) => (
          <article key={node.id}>
            <img src={node.image.src} alt={node.name} />
            <p>{node.name}</p>
            <Link to={`/${images.node[node.image].childImageSharp.fluid}`}>
              Ver detalle <span>↪ </span>
            </Link>
          </article>
        ))}
      </section>
    </StyledSuggestions>
  )
}

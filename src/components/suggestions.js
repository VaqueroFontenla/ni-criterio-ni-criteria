import React from "react"
import { Link } from "gatsby"
import { StyledSuggestions } from "../styles/components"
import Img from "gatsby-image"

export default function Suggestions({ suggestions, images }) {
  console.log(suggestions)
  console.log(images)
  return (
    <StyledSuggestions>
      <h2>Recomendaciones</h2>
      <section>
        {suggestions.map(({ node }) => {
          const imageIndex = images.findIndex(
            image => image.node.relativePath === node.image
          )

          return (
            <article key={node.id}>
              <Img
                fluid={images[imageIndex].node.childImageSharp.fluid}
                style={{ width: "100%", height: "350px" }}
                alt={node.name}
              />
              <p>{node.name}</p>
              <Link to={`/${node.id}`}>
                Ver detalle <span>↪ </span>
              </Link>
            </article>
          )
        })}
      </section>
    </StyledSuggestions>
  )
}

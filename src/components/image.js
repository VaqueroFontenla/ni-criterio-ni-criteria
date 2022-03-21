import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Image({ name }) {
  const data = useStaticQuery(
    graphql`
      query GET_IMAGE {
        clapperboard: file(relativePath: { eq: "clapperboard.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return <Img fluid={data[name].childImageSharp.fluid} />
}

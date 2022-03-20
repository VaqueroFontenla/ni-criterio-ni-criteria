import * as React from "react"
import { graphql } from "gatsby"
import { Jumbo, Suggestions, SEO } from "../components"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allSuggestionsJson {
      edges {
        node {
          id
          name
          autor
          image
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const suggestions = data.allSuggestionsJson.edges.map(({ node }) => {
    const imageIndex = data.allFile.edges.findIndex(
      image => image.node.relativePath === node.image
    )
    return {
      ...node,
      image: data.allFile.edges[imageIndex].node,
    }
  })

  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Suggestions suggestions={suggestions} />
    </>
  )
}

export default IndexPage

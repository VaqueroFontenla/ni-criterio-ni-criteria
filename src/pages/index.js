import * as React from "react"
import { graphql } from "gatsby"
import { Jumbo, Suggestions, SEO } from "../components"
import scrollTo from "gatsby-plugin-smoothscroll"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
            title
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
          category
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
      <SEO title={data.allSite.edges[0].node.siteMetadata.title} />
      <Jumbo
        title={data.allSite.edges[0].node.siteMetadata.title}
        description={data.allSite.edges[0].node.siteMetadata.description}
        onClick={() => scrollTo("#suggestions")}
      />
      <Suggestions suggestions={suggestions} />
    </>
  )
}

export default IndexPage

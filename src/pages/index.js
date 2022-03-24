import * as React from "react"
import { graphql } from "gatsby"
import { Jumbo, Suggestions, SEO } from "../components"
import { SuggestionsWrapper } from "../styles/components"

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
        title={data.allSite.edges[0].node.siteMetadata.title}
        description={data.allSite.edges[0].node.siteMetadata.description}
        onClick={() => scrollTo("#suggestions")}
      />
      <SuggestionsWrapper id="suggestions">
        <Suggestions suggestions={suggestions} />
      </SuggestionsWrapper>
    </>
  )
}

export default IndexPage

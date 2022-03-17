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
          category
          description
          recommender
          link
          image
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Suggestions
      suggestions={data.allSuggestionsJson.edges}
      images={data.allFile.edges}
    />
  </>
)

export default IndexPage

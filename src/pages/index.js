import * as React from "react"
import { graphql } from "gatsby"
import { Jumbo, Suggestions, Seo } from "../components"

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
  }
`

const IndexPage = ({ data }) => (
  <>
    <Seo title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Suggestions suggestions={data.allSuggestionsJson.edges} />
  </>
)

export default IndexPage

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const suggestionTemplate = path.resolve(`src/templates/suggestion.js`)
  const result = await graphql(`
    query GET_SUGGESTION {
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
              fluid(maxWidth: 1000) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const suggestions = result.data.allSuggestionsJson.edges.map(({ node }) => {
    const imageIndex = result.data.allFile.edges.findIndex(
      image => image.node.relativePath === node.image
    )
    return {
      ...node,
      image: result.data.allFile.edges[imageIndex].node,
    }
  })

  suggestions.forEach(suggestion => {
    createPage({
      path: `${suggestion.id}`,
      component: suggestionTemplate,
      context: suggestion,
    })
  })
}

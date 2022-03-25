import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { ScrollToTop, Icon, Tag } from "../components"
import { CATEGORIES } from "../constants"
import {
  StyledSuggestions,
  StyledSuggestionInfo,
  StyledSuggestion,
  StyledFilters,
} from "../styles/components"

const Suggestions = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] =
    React.useState(suggestions)
  const [activeTag, setActiveTag] = React.useState()
  const [isVisible, setIsVisible] = React.useState()

  React.useEffect(() => {
    activeTag
      ? setFilteredSuggestions(
          suggestions.filter(suggestion => suggestion.category === activeTag)
        )
      : setFilteredSuggestions(suggestions)
  }, [activeTag])

  return (
    <>
      <StyledSuggestions id="suggestions">
        <h2>Recomendaciones</h2>
        <StyledFilters>
          <div onClick={() => setIsVisible(isVisible => !isVisible)}>
            <span>Filtrar</span>
            <Icon color="darkBlue" type="expand" />
          </div>
          {isVisible && (
            <ul>
              {Object.values(CATEGORIES).map(category => (
                <li key={category}>
                  <Tag
                    onClick={() =>
                      category === activeTag
                        ? setActiveTag()
                        : setActiveTag(category)
                    }
                    active={category === activeTag}
                  >
                    {category}
                  </Tag>
                </li>
              ))}
            </ul>
          )}
        </StyledFilters>
        <div>
          {filteredSuggestions.map(suggestion => (
            <StyledSuggestion key={suggestion.id}>
              <Img
                fluid={suggestion.image.childImageSharp.fluid}
                style={{ width: "100%", maxHeight: "100%" }}
                alt={suggestion.name}
              />
              <StyledSuggestionInfo>
                <div>
                  <p>{suggestion.name}</p>
                  <small>{suggestion.autor}</small>
                </div>
                <Link to={`/${suggestion.id}`}>
                  Ver detalle{" "}
                  <Icon type="arrow" color="green" size="1" reverse />
                </Link>
              </StyledSuggestionInfo>
            </StyledSuggestion>
          ))}
        </div>
      </StyledSuggestions>
      <ScrollToTop
        onClick={() => {
          typeof window !== "undefined" &&
            window.scroll({
              top: 0,
              behavior: "smooth",
            })
        }}
      />
    </>
  )
}

export default Suggestions

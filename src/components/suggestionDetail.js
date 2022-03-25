import { Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { SEO, Icon, Tag } from "./"
import {
  StyledSuggestionDetail,
  StyledSuggestionDetailDescription,
  StyledSuggestionDetailInfo,
  StyledSuggestionDetailWrapper,
} from "../styles/components"

const SuggestionDetail = ({
  category,
  name,
  description,
  recommender,
  link,
  image,
}) => {
  return (
    <StyledSuggestionDetailWrapper>
      <Link to="/">
        <Icon type="arrow" color="green" size="1" />
        <span>Volver al catálogo</span>
      </Link>
      <StyledSuggestionDetail>
        <SEO title={name} />
        <Img
          fluid={image.childImageSharp.fluid}
          style={{ width: "100%", height: "100%" }}
          alt={name}
        />
        <StyledSuggestionDetailInfo>
          <h1>
            {name} <h2>{`[por ${recommender}]`}</h2>
          </h1>

          <Tag>{category}</Tag>
          <StyledSuggestionDetailDescription>
            <span>Descripción</span>
            <p>{description}</p>
          </StyledSuggestionDetailDescription>
          <div>
            <span>Donde: </span>
            <a href={link}>
              <span>{name}</span>
            </a>
          </div>
        </StyledSuggestionDetailInfo>
      </StyledSuggestionDetail>
    </StyledSuggestionDetailWrapper>
  )
}

export default SuggestionDetail

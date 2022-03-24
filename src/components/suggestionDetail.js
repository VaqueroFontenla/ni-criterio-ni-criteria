import { Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import {
  StyledSuggestionDetail,
  StyledSuggestionDetailDescription,
  StyledSuggestionDetailInfo,
  Tag,
  StyledSuggestionDetailWrapper,
} from "../styles/components"
import { SEO } from "./"

const SuggestionDetail = ({
  sku: id,
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
        <span>&#8592;</span>Volver al catálogo
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
            <a href={link}>{name}</a>
          </div>
        </StyledSuggestionDetailInfo>
      </StyledSuggestionDetail>
    </StyledSuggestionDetailWrapper>
  )
}

export default SuggestionDetail

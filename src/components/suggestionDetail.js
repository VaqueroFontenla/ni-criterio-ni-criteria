import React from "react"
import Img from "gatsby-image"
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/components"
import { SEO } from "./"

export default function SuggestionDetail({
  sku: id,
  category,
  name,
  description,
  recommender,
  link,
  image,
}) {
  console.log(image)
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <Suggestion>
        <Img
          fluid={image.childImageSharp.fluid}
          style={{ width: "100%", height: "100%" }}
          alt={name}
        />
        <SuggestionInfo>
          <Tag>{category}</Tag>
          <h2>{name}</h2>
          <b>USD</b>

          <p>Cantidad:</p>
        </SuggestionInfo>
      </Suggestion>
    </StyledProductDetail>
  )
}

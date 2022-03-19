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
      <Img
        fluid={image.childImageSharp.fluid}
        style={{ width: "100%", height: "350px" }}
        alt={name}
      />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD</b>

        <p>Cantidad:</p>
      </div>
    </StyledProductDetail>
  )
}

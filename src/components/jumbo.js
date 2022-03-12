import React from "react"
import { StyledJumbo } from "../styles/components"
import { default as Image } from "./image"

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>¡Consigue el mejor swag exclusivo y especial de Platzi</h2>
        <small>{description}</small>
      </div>
      <Image name="clapperboard" />
    </StyledJumbo>
  )
}

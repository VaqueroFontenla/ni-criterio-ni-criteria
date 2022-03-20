import React from "react"
import { StyledJumbo } from "../styles/components"

import { default as Image } from "./image"

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h1>Ni Criterio Ni criteria</h1>
        <span>{description}</span>
      </div>
    </StyledJumbo>
  )
}

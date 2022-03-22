import React from "react"
import { StyledJumbo } from "../styles/components"
import { ExpandIcon } from "./expand-icon"

export default function Jumbo({ title, description, onClick }) {
  return (
    <StyledJumbo>
      <div>
        <h1>{title}</h1>
        <span>{description}</span>
        <ExpandIcon onClick={onClick} />
      </div>
    </StyledJumbo>
  )
}

import React from "react"
import { StyledJumbo } from "../styles/components"
import { ExpandIcon } from "."

const Jumbo = ({ title, description, onClick }) => {
  return (
    <StyledJumbo>
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <ExpandIcon onClick={onClick} height="3" color="darkBlue" />
      </div>
    </StyledJumbo>
  )
}

export default Jumbo

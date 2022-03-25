import React from "react"
import { StyledJumbo } from "../styles/components"
import { Icon } from "."

const Jumbo = ({ title, description, onClick }) => {
  return (
    <StyledJumbo>
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <Icon type="expand" onClick={onClick} size="3" color="darkBlue" />
      </div>
    </StyledJumbo>
  )
}

export default Jumbo

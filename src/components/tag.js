import React from "react"
import { StyledTag } from "../styles/components"

const Tag = ({ children, onClick, active }) => {
  return (
    <StyledTag onClick={onClick} active={active}>
      {children}
    </StyledTag>
  )
}

export default Tag

import React from "react"
import { colors, StyledExpandIcon } from "../styles/components"

const ExpandIcon = ({ onClick, color, height, reverse }) => (
  <StyledExpandIcon onClick={onClick} height={height} reverse={reverse}>
    <svg
      width="24"
      height="12"
      viewBox="0 0 24 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.47002 0.411974C-0.156677 0.959396 -0.156677 1.84197 0.47002 2.3894L11.0983 11.6732C11.5971 12.1089 12.4029 12.1089 12.9017 11.6732L23.53 2.3894C24.1567 1.84197 24.1567 0.959396 23.53 0.411974C22.9033 -0.135448 21.8929 -0.135448 21.2662 0.411974L11.9936 8.50041L2.72102 0.400802C2.10711 -0.135448 1.08393 -0.135448 0.47002 0.411974Z"
        fill={colors[color]}
      />
    </svg>
  </StyledExpandIcon>
)

export default ExpandIcon

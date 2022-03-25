import React from "react"
import { ArrowSvg } from "./icons/arrow"
import { ExpandSvg } from "./icons/expand"
import { colors, StyledIcon } from "../../styles/components"

const iconType = {
  expand: <ExpandSvg />,
  arrow: <ArrowSvg />,
}

const iconColor = {
  softGray: colors.softGray,
  darkBlue: colors.darkBlue,
  green: colors.green,
}

const Icon = ({ type, size, color, reverse, onClick }) => (
  <StyledIcon
    size={size ? size : "1.5"}
    color={color ? iconColor[color] : colors.softGray}
    onClick={onClick}
    reverse={reverse}
  >
    {iconType[type]}
  </StyledIcon>
)

export default Icon

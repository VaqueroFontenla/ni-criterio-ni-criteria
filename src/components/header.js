import * as React from "react"
import { Link } from "gatsby"
import { StyledHeader } from "../styles/components"
import Cinema from "../images/cinema.png"

const Header = () => (
  <StyledHeader id="header">
    <Link to="/">
      <img src={Cinema} alt="logo ni criterio ni criteria" />
    </Link>
  </StyledHeader>
)

export default Header

import React from "react"
import { Icon } from "."
import { StyledScrollToTop } from "../styles/components"

const ScrollToTop = ({ onClick }) => {
  const [isVisible, setIsVisible] = React.useState()

  const toggleVisible = React.useCallback(() => {
    window.scrollY > window.innerHeight / 2
      ? setIsVisible(true)
      : setIsVisible(false)
  }, [])

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
    return () => {
      window.removeEventListener("scroll", toggleVisible)
    }
  }, [toggleVisible])

  return (
    <StyledScrollToTop isVisible={isVisible} onClick={onClick}>
      <Icon reverse type="expand" />
    </StyledScrollToTop>
  )
}

export default ScrollToTop

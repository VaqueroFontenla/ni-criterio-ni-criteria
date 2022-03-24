import React from "react"
import { ExpandIcon } from "."
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
      <ExpandIcon color="softGray" height="1.5" reverse />
    </StyledScrollToTop>
  )
}

export default ScrollToTop

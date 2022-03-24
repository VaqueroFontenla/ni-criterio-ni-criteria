import * as React from "react"
import PropTypes from "prop-types"
import { Footer, Content } from "../styles/components"
import { size } from "../styles"
import { useWindowDimensions } from "../hooks/useWindowDimensions"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const { width } = useWindowDimensions()
  const isMediumWindow = width && width >= size.medium
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer>
        {isMediumWindow && <span>{`© ${new Date().getFullYear()}`}</span>}
        <span role="img" aria-label="emoji">
          🚀
        </span>
        Built with Rock and Roll by
        <a href="https://github.com/VaqueroFontenla">Loretus</a>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Footer, Content } from "../styles/components"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <Content>
      <main>{children}</main>
      <Footer>
        © {new Date().getFullYear()},{" "}
        <span role="img" aria-label="emoji">
          🚀
        </span>
        Built with Rock and Roll by
        <a href="https://github.com/VaqueroFontenla">Loretus</a>
      </Footer>
    </Content>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

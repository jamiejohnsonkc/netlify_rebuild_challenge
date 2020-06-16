/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Navbar from "../../../../../jim-workbench-custom-presentation/Nav/Navbar"

const Layout = (props) => (
  <Styled.root>
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        // set this to `minHeight: '100vh'` for full viewport height
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <main
        sx={{
          flex: "1 1 auto",
          width: "100%",
        }}
      >
        {props.children}
      </main>
    </div>
  </Styled.root>
)

Layout.propTypes = {}

Layout.defaultProps = {}

export default Layout

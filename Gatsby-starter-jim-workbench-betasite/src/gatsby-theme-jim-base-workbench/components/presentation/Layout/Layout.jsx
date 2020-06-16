/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Layout = (children) => (
  <Styled.root>
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        // set this to `minHeight: '100vh'` for full viewport height
        minHeight: "100vh",
      }}
    >
      <main
        sx={{
          flex: "1 1 auto",
          width: "100%",
        }}
      >
        {children}
      </main>
    </div>
  </Styled.root>
)

Layout.propTypes = {}

Layout.defaultProps = {}

export default Layout

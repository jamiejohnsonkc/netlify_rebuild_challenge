/** @jsx jsx */
import { Styled, jsx, NavLink } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Top = ({ siteTitle }) => (
  <Styled.div
    sx={{
      variant: "layout.top",
    }}
  >
    <div
      sx={{
        margin: 0,
        position: "relative",
      }}
    >
      <Styled.h1 sx={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            color: `muted`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Styled.h1>
    </div>
  </Styled.div>
)

Top.propTypes = {
  siteTitle: PropTypes.string,
}

Top.defaultProps = {
  siteTitle: ``,
}

export default Top

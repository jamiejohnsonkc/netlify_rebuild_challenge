/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  white-space: nowrap;
  position: relative;
  cursor: pointer;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    height: 0.1em;
  }

  @media (max-width: 768px) {
  }
`

const StaticNavbarLinks = (props) => (
  <>
    <StyledLink
      to="/"
      {...props}
      activeClassName="active"
      sx={{
        color: "inherit",
        "&.active": { color: "accent" },
        variant: "links.nav",
      }}
    >
      home
    </StyledLink>
    <StyledLink to="/page-2/" {...props} sx={{ variant: "links.nav" }}>
      services
    </StyledLink>
    <StyledLink to="/insights/" {...props} sx={{ variant: "links.nav" }}>
      insights
    </StyledLink>
    <StyledLink to="/profile/" {...props} sx={{ variant: "links.nav" }}>
      profile
    </StyledLink>
  </>
)

StaticNavbarLinks.propTypes = {
  // bla: PropTypes.string,
}

StaticNavbarLinks.defaultProps = {
  // bla: 'test',
}

export default StaticNavbarLinks

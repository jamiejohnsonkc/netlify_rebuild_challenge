/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Masthead from "../../layout/Masthead"
import NavBar from "../../navigation/NavBar"
import Logo from "../../base/Logo"
import NavMenu from "../../navigation/NavMenu"

const SaasMasthead = (props) => (
  <>
    <Masthead>
      <NavBar>
        <Logo
          className="mastHeadLogo"
          sx={{
            variant: "layout.mastheadLogo",
          }}
        />
        <NavMenu />
      </NavBar>
    </Masthead>
  </>
)

SaasMasthead.propTypes = {}

SaasMasthead.defaultProps = {}

export default SaasMasthead

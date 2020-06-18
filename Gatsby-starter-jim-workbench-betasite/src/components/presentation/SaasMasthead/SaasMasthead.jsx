/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Masthead from "../../layout/Masthead"
import NavBar from "../../navigation/NavBar"
import NavMenu from "../../navigation/NavMenu"

const SaasMasthead = (props) => (
  <>
    <Masthead>
      <NavBar>
        <NavMenu />
      </NavBar>
    </Masthead>
  </>
)

SaasMasthead.propTypes = {}

SaasMasthead.defaultProps = {}

export default SaasMasthead

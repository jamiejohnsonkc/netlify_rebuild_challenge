/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Masthead from "../../layout/Masthead"
import Navbar from "../../navigation/navFunctions/Navbar"
import Nav from "../../navigation/navFunctions/Nav"
const SaasMasthead = (props) => (
  <>
    <Masthead>
      <Nav>
        <Navbar />
      </Nav>
    </Masthead>
  </>
)

SaasMasthead.propTypes = {}

SaasMasthead.defaultProps = {}

export default SaasMasthead

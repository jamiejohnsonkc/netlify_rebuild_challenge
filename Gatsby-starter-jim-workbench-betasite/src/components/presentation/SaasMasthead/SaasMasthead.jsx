/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Masthead from "../../layout/Masthead"
import Navbar from "../../navigation/navFunctions/Navbar"
import Nav from "../../navigation/navFunctions/Nav"
const SaasMasthead = (props) => (
  <>
    <Masthead>
      <Container>
        <Nav>
          <Navbar />
        </Nav>
      </Container>
    </Masthead>
  </>
)

SaasMasthead.propTypes = {}

SaasMasthead.defaultProps = {}

export default SaasMasthead

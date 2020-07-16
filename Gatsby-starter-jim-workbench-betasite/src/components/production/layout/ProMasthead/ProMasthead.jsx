/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Masthead from "../../../layout/Masthead"
import ProNavbar from "../../navigation/ProNavbar"
import Nav from "../../../navigation/navFunctions/Nav"

const ProMasthead = (props) => (
  <>
    <Masthead>
      <Container className="Container">
        <Nav>
          <ProNavbar />
        </Nav>
      </Container>
    </Masthead>
  </>
)

ProMasthead.propTypes = {}

ProMasthead.defaultProps = {}

export default ProMasthead

/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Button from "../../inputs/Button/Button"

const Test = (props) => (
  <div>
    <button>raw</button>
    <Button>mine</Button>
  </div>
)

Test.propTypes = {}

Test.defaultProps = {}

export default Test

/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../../layout/Pancake"

const ProPancake = (props) => (
  <Pancake
    className="Pancake"
    {...props}
    sx={{
      py: 6,
    }}
  />
)

ProPancake.propTypes = {}

ProPancake.defaultProps = {}

export default ProPancake

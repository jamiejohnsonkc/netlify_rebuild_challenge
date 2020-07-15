/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../../layout/Pancake"

const SaasPancake = (props) => (
  <Pancake
    className="Pancake"
    {...props}
    sx={{
      py: 6,
    }}
  />
)

SaasPancake.propTypes = {}

SaasPancake.defaultProps = {}

export default SaasPancake

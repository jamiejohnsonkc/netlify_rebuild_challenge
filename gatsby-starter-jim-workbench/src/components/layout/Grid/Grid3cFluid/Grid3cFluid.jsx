/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Grid3cFluid = (props) => (
  <Grid columns={[3, "1fr 1fr 1fr"]}>
    <Box display="grid">{props.children}</Box>
    <Box display="grid">{props.children}</Box>
    <Box display="grid">{props.children}</Box>
  </Grid>
)

Grid3cFluid.propTypes = {}

Grid3cFluid.defaultProps = {}

export default Grid3cFluid

/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Grid_1r_3c = (props) => (
  <Grid columns={[3, "1fr 1fr 1fr"]}>
    <Box display="grid">{props.children}</Box>
    <Box display="grid">{props.children}</Box>
    <Box display="grid">{props.children}</Box>
  </Grid>
)

Grid_1r_3c.propTypes = {}

Grid_1r_3c.defaultProps = {}

export default Grid_1r_3c

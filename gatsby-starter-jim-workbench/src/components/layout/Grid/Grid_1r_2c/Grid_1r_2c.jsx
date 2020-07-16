/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Grid_1r_2c = (props) => (
  <Grid columns={[1, 2, 2, 2]}>
    <Box display="grid">{props.contentCol1}</Box>
    <Box display="grid">{props.contentCol2}</Box>
  </Grid>
)

Grid_1r_2c.propTypes = {}

Grid_1r_2c.defaultProps = {}

export default Grid_1r_2c

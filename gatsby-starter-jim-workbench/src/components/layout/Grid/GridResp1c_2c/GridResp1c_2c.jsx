/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const GridResp1c_2c = (props) => (
  <Grid columns={[1, 2, 2, 2]}>
    <Box display="grid">{props.contentCol1}</Box>
    <Box display="grid">{props.contentCol2}</Box>
  </Grid>
)

GridResp1c_2c.propTypes = {}

GridResp1c_2c.defaultProps = {}

export default GridResp1c_2c

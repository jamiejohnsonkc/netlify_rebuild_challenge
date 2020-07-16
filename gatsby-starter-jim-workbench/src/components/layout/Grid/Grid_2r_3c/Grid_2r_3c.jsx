/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Grid_2r_3c = (props) => (
  <Grid columns={[2, 2, 3, 3]}>
    <Box display="grid">{props.boxContent1}</Box>
    <Box display="grid">{props.boxContent2}</Box>
    <Box display="grid">{props.boxContent3}</Box>
    <Box display="grid">{props.boxContent4}</Box>
    <Box display="grid">{props.boxContent5}</Box>
    <Box display="grid">{props.boxContent6}</Box>
  </Grid>
)

Grid_2r_3c.propTypes = {}

Grid_2r_3c.defaultProps = {}

export default Grid_2r_3c

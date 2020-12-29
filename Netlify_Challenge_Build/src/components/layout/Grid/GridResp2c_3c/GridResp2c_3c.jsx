/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const GridResp2c_3c = (props) => (
  <Grid columns={[2, 2, 3, 3]}>
    <Box display="grid">{props.boxContent1}</Box>
    <Box display="grid">{props.boxContent2}</Box>
    <Box display="grid">{props.boxContent3}</Box>
    <Box display="grid">{props.boxContent4}</Box>
    <Box display="grid">{props.boxContent5}</Box>
    <Box display="grid">{props.boxContent6}</Box>
  </Grid>
)

GridResp2c_3c.propTypes = {}

GridResp2c_3c.defaultProps = {}

export default GridResp2c_3c

/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Grid_1r_33_66 = (props) => (
  <Grid columns={[1, "1fr 2fr"]}>
    <Box display="grid">{props.children}</Box>
    <Box display="grid">{props.children}</Box>
  </Grid>
)

Grid_1r_33_66.propTypes = {}

Grid_1r_33_66.defaultProps = {}

export default Grid_1r_33_66

//TODO go back and understand how to apply props at the primitive level to enable customization at the production stage

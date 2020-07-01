/** @jsx jsx */
import { jsx, Box, Grid } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Grid_1r_66_33 = (props) => (
  <Grid columns={[2, "2fr 1fr"]}>
    <Box display="grid">{props.children}</Box>
    <Box display="grid">{props.children}</Box>
  </Grid>
)

Grid_1r_66_33.propTypes = {
  // displayText: PropTypes.any,
  // headerText: PropTypes.any,
  // subheadText: PropTypes.any,
  // visual: PropTypes.any,
}

Grid_1r_66_33.defaultProps = {}

export default Grid_1r_66_33

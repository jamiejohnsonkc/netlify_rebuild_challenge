/** @jsx jsx */
import { jsx, Box, Container, Grid, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../Pancake"

const Grid_1r_25_75 = (props) => (
  <Grid columns={[2, "1fr 3fr"]}>
    <Box display="grid">{props.children}</Box>
    <Box display="grid">{props.children}</Box>
  </Grid>
)

Grid_1r_25_75.propTypes = {
  // displayText: PropTypes.any,
  // headerText: PropTypes.any,
  // subheadText: PropTypes.any,
  // visual: PropTypes.any,
}

Grid_1r_25_75.defaultProps = {}

export default Grid_1r_25_75

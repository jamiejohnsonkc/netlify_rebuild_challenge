/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const F4colGrid = (props) => (
  <Grid gap={2} columns={[2, "1fr 2fr"]}>
    <Box bg="primary">Box</Box>
    <Box bg="muted">Box</Box>
    <Box bg="primary">Box</Box>
    <Box bg="muted">Box</Box>
  </Grid>
)

F4colGrid.propTypes = {}

F4colGrid.defaultProps = {}

export default F4colGrid

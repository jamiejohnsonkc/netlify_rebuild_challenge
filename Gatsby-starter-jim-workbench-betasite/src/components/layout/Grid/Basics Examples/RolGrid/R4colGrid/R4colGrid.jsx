/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const R4colGrid = (props) => (
  <Grid gap={2} columns={[2, null, 4]}>
    <Box bg="primary">Box</Box>
    <Box bg="muted">Box</Box>
    <Box bg="primary">Box</Box>
    <Box bg="muted">Box</Box>
  </Grid>
)

R4colGrid.propTypes = {}

R4colGrid.defaultProps = {}

export default R4colGrid

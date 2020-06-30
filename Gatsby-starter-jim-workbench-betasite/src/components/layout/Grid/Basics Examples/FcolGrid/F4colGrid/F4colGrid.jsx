/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const F4colGrid = (props) => (
  <Grid gap={2} columns={[2, "1fr 2fr"]}>
    <Box>{props.children}</Box>
    <Box>{props.children}</Box>
    <Box>{props.children}</Box>
    <Box>{props.children}</Box>
  </Grid>
)

F4colGrid.propTypes = {}

F4colGrid.defaultProps = {}

export default F4colGrid

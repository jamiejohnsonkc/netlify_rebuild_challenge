/** @jsx jsx */
import { jsx, Grid, Box, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Grid_1r_75_25 = (props) => (
  <Grid
    py={4}
    my={4}
    columns={[1, 1, "3fr 1fr", "3fr 1fr"]}
    margin={[`0 auto`, 0]}
  >
    <Box display="grid">{props.content75}</Box>
    <Box display="grid">{props.content25}</Box>
  </Grid>
)

Grid_1r_75_25.propTypes = {}

Grid_1r_75_25.defaultProps = {}

export default Grid_1r_75_25

/** @jsx jsx */
import { jsx, Box, Grid, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Grid_1r_25_75 = (props) => (
  <Grid
    py={4}
    my={4}
    columns={[1, 1, "1fr 3fr", "1fr 3fr"]}
    margin={[`0 auto`, 0]}
  >
    <Box display="grid">{props.content25}</Box>
    <Box display="grid">{props.content75}</Box>
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

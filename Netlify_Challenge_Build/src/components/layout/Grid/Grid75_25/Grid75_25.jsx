/** @jsx jsx */
import { jsx, Grid, Box, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

//TODO BEWARE this file was not used in production. should presume it is an unfinished iteration. see production/ProBenefits for solution

const Grid75_25 = (props) => (
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

Grid75_25.propTypes = {}

Grid75_25.defaultProps = {}

export default Grid75_25

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
    <Box
      display="grid"
      paddingRight={[0, 0, 2, 2]}
      {...props}
      sx={{
        order: [2, 2, 1, 1],
      }}
    >
      <Styled.h2>{props.header}</Styled.h2>
      <Text
        {...props}
        sx={{
          variant: "styles.d3",
        }}
      >
        {props.body}
      </Text>
    </Box>
    <Box
      display="grid"
      {...props}
      sx={{
        order: [1, 1, 2, 2],
      }}
    >
      {props.visual}
    </Box>
  </Grid>
)

Grid_1r_75_25.propTypes = {}

Grid_1r_75_25.defaultProps = {}

export default Grid_1r_75_25

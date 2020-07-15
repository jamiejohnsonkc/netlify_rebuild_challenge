/** @jsx jsx */
import { jsx, Box, Container, Grid, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../layout/Pancake"

const Section_Grid_1r_66Text_33Visual = (props) => (
  <Grid columns={[1, "2fr 1fr"]}>
    <Box
      display="grid"
      {...props}
      sx={{
        order: [2, 2, 1, 1],
      }}
    >
      <Styled.h1>{props.headerText}</Styled.h1>
      <Text
        sx={{
          variant: "styles.d2",
        }}
      >
        {props.subheadText}
      </Text>
      <Text
        sx={{
          variant: "styles.p2",
        }}
      >
        {props.displayText}
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

Section_Grid_1r_66Text_33Visual.propTypes = {
  // displayText: PropTypes.any,
  // headerText: PropTypes.any,
  // subheadText: PropTypes.any,
  // visual: PropTypes.any,
}

Section_Grid_1r_66Text_33Visual.defaultProps = {}

export default Section_Grid_1r_66Text_33Visual

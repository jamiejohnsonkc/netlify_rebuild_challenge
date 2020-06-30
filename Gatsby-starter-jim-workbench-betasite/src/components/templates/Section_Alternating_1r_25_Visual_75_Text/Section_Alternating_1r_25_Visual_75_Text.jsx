/** @jsx jsx */
import { jsx, Box, Container, Grid, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../layout/Pancake"
import Grid_1r_25_75 from "../../layout/Grid/Grid_1r_25_75/Grid_1r_25_75"
import Grid_1r_75_25 from "../../layout/Grid/Grid_1r_75_25"

const Section_Alternating_1r_25_Visual_75_Text = (props) => (
  <Pancake
    as="Section"
    {...props}
    sx={{
      variant: "layout.section",
    }}
  >
    <Container
      {...props}
      sx={{
        variant: "layout.containerNarrow",
      }}
    >
      <Grid_1r_75_25
        visual="pic here"
        header="Officia ullamco reprehenderit velit ex"
        body="Consectetur cillum enim nulla adipisicing excepteur esse commodo pariatur tempor culpa aliqua ipsum. Incididunt Lorem fugiat aute anim nisi anim adipisicing esse. Consectetur ut veniam et ipsum excepteur cupidatat cillum fugiat dolore."
      />

      <Grid_1r_25_75
        visual="pic here"
        header="Occaecat irure id dolore aliquip occaecat et occaecat"
        body="Voluptate cillum velit incididunt mollit. Tempor magna in ipsum pariatur amet labore sunt ullamco magna consectetur in. Officia reprehenderit officia et ad officia mollit aute est sunt eiusmod veniam aute nulla."
      />

      <Grid_1r_75_25
        visual="pic here"
        header="Excepteur proident pariatur nostrud proident nostrud."
        body="Anim ut exercitation dolore duis. Proident ipsum anim dolor anim in exercitation officia nisi sunt voluptate deserunt do et nulla. Ea quis laboris deserunt dolor sunt elit enim tempor ex duis aute."
      />
      <Grid_1r_25_75
        visual="pic here"
        header="Pariatur minim dolore est esse duis."
        body="Eu exercitation do dolore est ad in amet reprehenderit reprehenderit ea esse ut do adipisicing. Labore anim officia dolore esse ad mollit fugiat. Eu adipisicing officia enim dolore Lorem cupidatat nostrud sint in aliquip commodo elit. Minim labore veniam reprehenderit mollit laborum laboris adipisicing amet nisi magna do sint."
      />
    </Container>
  </Pancake>
)

Section_Alternating_1r_25_Visual_75_Text.propTypes = {
  // displayText: PropTypes.any,
  // headerText: PropTypes.any,
  // subheadText: PropTypes.any,
  // visual: PropTypes.any,
}

Section_Alternating_1r_25_Visual_75_Text.defaultProps = {}

export default Section_Alternating_1r_25_Visual_75_Text

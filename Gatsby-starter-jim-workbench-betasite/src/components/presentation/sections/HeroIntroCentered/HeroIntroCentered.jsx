/** @jsx jsx */
import { jsx, Heading, Text, Styled, Container, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import "../../../../css/fonts.css"
import PanCake from "../../../layout/Pancake"
import BackgroundSvg from "../../../base/BackgroundSvg"
import Wavy from "../../../../svg/assets/netlifyTrinityv2.svg"

const HeroIntroCentered = (props) => (
  <PanCake
    as="section"
    {...props}
    cc
    sx={{
      variant: "layout.introTopCentered",
    }}
  >
    <Container>
      <Box
        {...props}
        sx={{
          textAlign: "center",
          width: ["100%", "100%", "83%"],
          margin: `0 auto`,
        }}
      >
        <Heading
          as="h1"
          sx={{
            variant: "styles.b1",
            marginBottom: 4,
            paddingBottom: 0,
            color: "teal",
          }}
        >
          Talk to an expert
        </Heading>
        <Text
          sx={{
            variant: "styles.d3",
            marginBottom: 4,
            // paddingBottom: 4,
            color: "teal",
            maxWidth: "61%",
            margin: `0 auto`,
          }}
        >
          We'll help you combine the flexibility of the modern web with the
          control and compliance your business needs.
        </Text>
      </Box>
    </Container>
  </PanCake>
)
HeroIntroCentered.propTypes = {}

HeroIntroCentered.defaultProps = {}

export default HeroIntroCentered

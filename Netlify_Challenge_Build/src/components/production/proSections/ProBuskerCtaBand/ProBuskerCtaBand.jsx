/** @jsx jsx */
import { jsx, Container, Styled, Text, Button } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../../layout/Pancake"
import palette from "@palette"
import { darken, lighten } from "@theme-ui/color"
import ProPancake from "../../proLayout/ProPancake"

const ProBuskerCtaBand = (props) => (
  <ProPancake>
    <Container
      {...props}
      sx={{
        textAlign: "center",
      }}
    >
      <Text
        {...props}
        sx={{
          variant: "styles.b1",
          color: palette.teal,
        }}
      >
        Get started with Netlify
      </Text>
      <Text
        {...props}
        sx={{
          variant: "styles.d3",
          paddingBottom: 4,
        }}
      >
        Deploy a global scale website in minutes.
      </Text>
      <Button
        {...props}
        sx={{
          bg: palette.teal,
          "&:hover": {
            bg: lighten(palette.teal, 0.05),
          },
        }}
      >
        Get started for free
      </Button>
    </Container>
  </ProPancake>
)

ProBuskerCtaBand.propTypes = {}

ProBuskerCtaBand.defaultProps = {}

export default ProBuskerCtaBand

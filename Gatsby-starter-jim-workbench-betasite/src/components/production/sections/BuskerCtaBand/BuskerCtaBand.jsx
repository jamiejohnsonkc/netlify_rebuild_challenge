/** @jsx jsx */
import { jsx, Container, Styled, Text, Button } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../../layout/Pancake"
import { color } from "../../../../../../jim-workbench-custom-themes/colors"
import { darken, lighten } from "@theme-ui/color"
import ProPancake from "../../layout/ProPancake"

const BuskerCtaBand = (props) => (
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
          color: color.teal,
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
          bg: color.teal,
          "&:hover": {
            bg: lighten(color.teal, 0.05),
          },
        }}
      >
        Get started for free
      </Button>
    </Container>
  </ProPancake>
)

BuskerCtaBand.propTypes = {}

BuskerCtaBand.defaultProps = {}

export default BuskerCtaBand

/** @jsx jsx */
import {
  jsx,
  Container,
  Styled,
  Text,
  colorMode,
  setColorMode,
  useColorMode,
  Grid,
  Box,
  Button,
} from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../../layout/Pancake"
import CheckMark from "../../../base/CheckMark"
import { color } from "../../../../../../jim-workbench-custom-themes/colors"
import { darken } from "@theme-ui/color"

const Claim = (props) => (
  <Box>
    <CheckMark
      {...props}
      sx={{
        display: "inline-grid",
        marginRight: 1,
      }}
    />{" "}
    <Text
      {...props}
      sx={{
        display: "inline-block",
      }}
    >
      {props.claimText}
    </Text>
  </Box>
)

const CalloutBand = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode("splash")
  return (
    <Pancake
      {...props}
      sx={{
        // backgroundColor: color.violetDark,
        background: "linear-gradient(to left,#4f005e,#33065b)",
        py: 6,
      }}
    >
      <Container>
        <Grid columns={[1, "2.75fr 1.25fr"]}>
          <Box>
            <Styled.h1
              {...props}
              sx={{
                color: "white",
              }}
            >
              Get even further with Enterprise
            </Styled.h1>
            <Text
              {...props}
              sx={{
                variant: "styles.d3",
                display: "block",
                mb: 4,
                color: "white",
                maxWidth: ["83%"],
              }}
            >
              Netlify's Enterprise ADN is trusted by Citrix, Verizon, Peloton,
              Atlassian, Samsung, and more.
            </Text>
            <Button
              {...props}
              sx={{
                bg: color.teal,
                "&:hover": {
                  bg: darken(color.teal, 0.05),
                },
              }}
            >
              Contact Sales
            </Button>
          </Box>
          <Box
            {...props}
            sx={{
              py: "1.618em",
              px: "1.618em",
              bg: "white",
              borderRadius: "8px",
              boxShadow: "callOut",
            }}
          >
            <Claim claimText="Faster buildbots" />
            <Claim claimText="Dedicated build infrastructure" />
            <Claim claimText="More POPs" />
            <Claim claimText="Dedicated support / Custom SLAs" />
            <Claim claimText="Phased roll-in" />
          </Box>
        </Grid>
      </Container>
    </Pancake>
  )
}

CalloutBand.propTypes = {}

CalloutBand.defaultProps = {}

export default CalloutBand

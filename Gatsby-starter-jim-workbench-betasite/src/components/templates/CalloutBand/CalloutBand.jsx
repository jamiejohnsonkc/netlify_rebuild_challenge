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
import { color } from "../../../../../../jim-workbench-custom-themes/colors"
import { darken } from "@theme-ui/color"
import IconBulletList from "../IconBulletList"
import IconBulletListItem from "../IconBulletListItem"

const CalloutBand = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode("splash")
  return (
    <Pancake
      {...props}
      sx={{
        // backgroundColor: color.violetDark,
        // background: "linear-gradient(to left,#4f005e,#33065b)",
        py: 6,
      }}
    >
      <Container>
        <Grid columns={[1, "2.75fr 1.25fr"]}>
          <Box>
            <Styled.h1>Get even further with Enterprise</Styled.h1>
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
          <IconBulletList
            {...props}
            sx={{
              py: "1.618em",
              px: "1.618em",
              bg: "white",
              borderRadius: "8px",
              boxShadow: "callOut",
            }}
          >
            <IconBulletListItem bulletListText="Faster buildbots" />
            <IconBulletListItem bulletListText="Dedicated build infrastructure" />
            <IconBulletListItem bulletListText="More POPs" />
            <IconBulletListItem bulletListText="Dedicated support / Custom SLAs" />
            <IconBulletListItem bulletListText="Phased roll-in" />
          </IconBulletList>
        </Grid>
      </Container>
    </Pancake>
  )
}

CalloutBand.propTypes = {}

CalloutBand.defaultProps = {}

export default CalloutBand

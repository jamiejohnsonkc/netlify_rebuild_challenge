/** @jsx jsx */
import { jsx, Container, Styled, Text, Grid, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Logo1 from "../../../../svg/assets/logo-1.svg"
import Logo2 from "../../../../svg/assets/logo-2.svg"
import Logo3 from "../../../../svg/assets/logo-3.svg"
import Logo4 from "../../../../svg/assets/logo-4.svg"
import Logo5 from "../../../../svg/assets/logo-5.svg"
import { color } from "@colors"

const ContactPageDialogue = (props) => (
  <Box paddingRight={5} paddingTop={5}>
    <Styled.h2 color="color.teal">Let's discuss your project</Styled.h2>
    <Text
      {...props}
      sx={{
        variant: "styled.d3",
        marginBottom: 4,
      }}
    >
      We can create a custom package to meet your team’s needs, whether it’s
      speed and availability, security and compliance, or a bit of everything.
    </Text>

    <Styled.h3>You're in good company</Styled.h3>
    <Text
      {...props}
      sx={{
        variant: "styled.d3",
        marginBottom: 5,
      }}
    >
      Thousands of businesses trust Netlify to deploy and manage their critical
      web projects.
    </Text>
    <Grid
      columns={[2, 2, 3, 3]}
      {...props}
      sx={{
        gap: 4,
        width: "90%",
        gridTemplateRows: "1fr 1fr",
      }}
    >
      <Box
        className="Box"
        {...props}
        sx={{
          display: "grid",
          "& > svg": {
            maxHeight: "1.85em",
            "& > path": {
              fill: color.gray3,
            },
          },
        }}
      >
        <Logo1 />
      </Box>
      <Box
        {...props}
        sx={{
          display: "grid",
          "& > svg": {
            maxHeight: "1.85em",
            "& > path": {
              fill: color.gray3,
            },
          },
        }}
      >
        <Logo2 />
      </Box>
      <Box
        {...props}
        sx={{
          display: "grid",
          "& > svg": {
            maxHeight: "1.85em",
            "& > path": {
              fill: color.gray3,
            },
          },
        }}
      >
        <Logo3 />
      </Box>
      <Box
        {...props}
        sx={{
          display: "grid",

          "& > svg": {
            maxHeight: "1.9em",
            "& > path": {
              fill: color.gray3,
            },
            "& > circle": {
              fill: color.gray3,
            },
            "& > rect": {
              fill: color.gray3,
            },
          },
        }}
      >
        <Logo4 />
      </Box>
      <Box
        {...props}
        sx={{
          display: "grid",
          "& > svg": {
            maxHeight: "1.85em",
            "& > path": {
              fill: color.gray3,
            },
            "& > circle": {
              fill: color.gray3,
            },
          },
          "& > svg > .logoIpsum": {
            fill: color.gray3,
          },
        }}
      >
        <Logo5 />
      </Box>
      <Box
        {...props}
        sx={{
          display: "grid",
          "& > svg": {
            maxHeight: "1.85em",
            "& > path": {
              fill: color.gray3,
            },
          },
        }}
      >
        <Logo1 />
      </Box>
    </Grid>
  </Box>
)

ContactPageDialogue.propTypes = {}

ContactPageDialogue.defaultProps = {}

export default ContactPageDialogue

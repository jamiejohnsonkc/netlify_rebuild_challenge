/** @jsx jsx */
import { jsx, Container, Card, Box, Styled, Text, Flex } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import CtaLink from "../../../base/CtaLink"
import Pancake from "../../../layout/Pancake"
import { color } from "../../../../../../jim-workbench-custom-themes/colors"
import { css } from "@emotion/core"
import cardBlue from "./cardBlueBg.svg"
import cardBlack from "./cardBlackBg.svg"
import cardPurple from "./cardPurpleBg.svg"
import {
  slideUp1,
  slideUp2,
  slideUp3,
} from "../../../../../../jim-workbench-custom-themes/exThemeUi/animation"
// import backgroundSvg from "./"

const card1Background = css`
  background-image: url(${cardBlue});
  background-repeat: no-repeat;
`

const card2Background = css`
  background-image: url(${cardBlack});
  background-repeat: no-repeat;
  background-position: -0.25em -0.5em;
  background-size: 102%;
`

const card3Background = css`
  background-image: url(${cardPurple});
  background-repeat: no-repeat;
  background-position-y: -0.25em;
`

const ProCard = (props) => (
  <Card
    {...props}
    sx={{
      position: "relative",
      flex: `0 1 31%`,
      py: 4,
      px: 3,
      my: [2, 2, 0, 0],
      boxShadow: "present",
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
    }}
    css={props.cardBackground}
  >
    <Styled.h3
      {...props}
      sx={{
        color,
        paddingTop: 2,
      }}
    >
      {props.cardHeader}
    </Styled.h3>
    <Text
      {...props}
      sx={{
        color,
        variant: "styles.p2",
      }}
    >
      {props.cardText}
    </Text>
    <CtaLink
      to="/"
      linkText="Learn More"
      iconName="ArrowRight"
      iconSize="1em"
      iconColor={color.teal}
      sx={{
        variant: "links.ctaLink.arrowRight",
        marginTop: "auto",
        color: `${color.teal}`,
        "&:hover": {
          color: `${color.teal}`,
        },
      }}
    />
  </Card>
)

const ProPlatform = (props) => (
  <Pancake
    {...props}
    sx={{
      py: 6,
    }}
  >
    <Container>
      <Styled.h1
        {...props}
        sx={{
          textAlign: "center",
          py: 4,
        }}
      >
        The rest of the Netlify Platform
      </Styled.h1>
      <Flex
        {...props}
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row", "row"],
          justifyContent: "space-evenly",
        }}
      >
        <ProCard
          {...slideUp1}
          cardBackground={card1Background}
          cardHeader="Netlify Build"
          cardText="The Git workflow for web development. Build, deploy, and manage modern web projects."
        />

        <ProCard
          {...props}
          {...slideUp2}
          cardBackground={card2Background}
          sx={{
            backgroundColor: `${color.black3}`,
            color: "white",
          }}
          // cardVisual={<CardGreen />}
          cardHeader="Netlify Dev"
          cardText="Run our entire platform right on your laptop. Preview it all - site generation, functions, and edge logic."
        />
        <ProCard
          cardBackground={card3Background}
          {...slideUp3}
          cardHeader="Netlify Edge"
          cardText="A new type of application delivery network custom designed for fast, responsive sites and modern workflows."
        />
      </Flex>
    </Container>
  </Pancake>
)

ProPlatform.propTypes = {}

ProPlatform.defaultProps = {}

export default ProPlatform

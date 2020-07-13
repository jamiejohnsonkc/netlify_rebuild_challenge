/** @jsx jsx */
import { jsx, Container, Card, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import CtaLink from "../../../base/CtaLink"
import Pancake from "../../../layout/Pancake"
import { color } from "../../../../../../jim-workbench-custom-themes/colors"
import CardBlue from "../../../../svg/assets/cardBlue.svg"
import CardGreen from "../../../../svg/assets/cardGreen.svg"
import CardPurple from "../../../../svg/assets/cardPurple.svg"

const CardBackground = (props) => (
  <div
    {...props}
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      borderRadius: 6,
    }}
  >
    {props.cardBackground}
  </div>
)

const SaasCard = (props) => (
  <Card
    {...props}
    sx={{
      backgroundImage,
      position: "relative",
      flex: `0 1 30%`,

      borderRadius: 6,
    }}
  >
    {/* <CardBackground cardBackground={props.cardVisual} /> */}
    <Styled.h3
      {...props}
      sx={{
        color,
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
        color: `${color.teal}`,
        "&:hover": {
          color: `${color.teal}`,
        },
      }}
    />
  </Card>
)

const SaasPlatform = (props) => (
  <Pancake>
    <Container
      {...props}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <SaasCard
        // cardVisual={<CardBlue />}
        backgroundImage={<CardBlue />}
        cardHeader="Netlify Build"
        cardText="The Git workflow for web development. Build, deploy, and manage modern web projects."
      />
      <SaasCard
        {...props}
        backgroundImage={<CardGreen />}
        sx={{
          backgroundColor: `${color.black3}`,
          color: "white",
        }}
        // cardVisual={<CardGreen />}
        cardHeader="Netlify Dev"
        cardText="Run our entire platform right on your laptop. Preview it all - site generation, functions, and edge logic."
      />
      <SaasCard
        backgroundImage={<CardPurple />}
        cardHeader="Netlify Edge"
        cardText="A new type of application delivery network custom designed for fast, responsive sites and modern workflows."
      />
    </Container>
  </Pancake>
)

SaasPlatform.propTypes = {}

SaasPlatform.defaultProps = {}

export default SaasPlatform

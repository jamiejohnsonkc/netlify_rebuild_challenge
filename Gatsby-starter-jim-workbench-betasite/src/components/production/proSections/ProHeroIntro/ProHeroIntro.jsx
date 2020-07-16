/** @jsx jsx */
import { jsx, Heading, Text, Styled, Container } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import "../../../../css/fonts.css"
import PanCake from "../../../layout/Pancake"
import BackgroundSvg from "../../../base/BackgroundSvg"
import Wavy from "../../../../svg/assets/netlifyTrinityv2.svg"

const ProHeroIntro = (props) => (
  <PanCake
    as="section"
    {...props}
    cc
    sx={{
      variant: "layout.introShort",
    }}
  >
    <BackgroundSvg {...props} sx={{ zIndex: "-1" }}>
      <Wavy
        className="wavy"
        {...props}
        sx={{
          // width: "350%",
          position: "absolute",
          top: "0",
          height: "46em",
          left: "-84em",
        }}
      />
    </BackgroundSvg>
    <Container>
      <div
        {...props}
        sx={{
          gridColumn: "standard",
        }}
      >
        <Heading
          as="h1"
          sx={{
            variant: "styles.b1",
            marginBottom: 4,
            paddingBottom: 0,
            color: "white",
          }}
        >
          Netlify Edge
        </Heading>
        <Text
          sx={{
            variant: "styles.d3",
            marginBottom: 4,
            paddingBottom: 4,
            maxWidth: ["100%", "83%", "50%"],
            color: "white",
          }}
        >
          A new type of application delivery network custom designed for blazing
          fast sites and modern workflows.
        </Text>
      </div>
    </Container>
  </PanCake>
)
ProHeroIntro.propTypes = {}

ProHeroIntro.defaultProps = {}

export default ProHeroIntro

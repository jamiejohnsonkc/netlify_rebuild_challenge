/** @jsx jsx */
import { jsx, Heading, Text, Styled, Flex, Container } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import "../../../../css/fonts.css"
import CtaLink from "../../../base/CtaLink"
import Button from "../../../inputs/Button"
import { Link } from "gatsby"
// import Icon from "../../base/Icon"
import PanCake from "../../../layout/Pancake"
import SplitTextLine from "../../../base/SplitTextLine"

// const str = "Line 1. **new-line** Line 2."

const ProHeroClaim = (props) => (
  <PanCake
    {...props}
    sx={{
      variant: "layout.intro",
    }}
  >
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
            paddingBottom: 4,
          }}
        >
          <SplitTextLine
            textLine1="The fastest way to"
            textLine2="build the fastest sites."
          />
        </Heading>
        <Text
          sx={{
            variant: "styles.d2",
            marginBottom: 4,
            paddingBottom: 4,
            maxWidth: ["100%", "83%", "61.8%"],
          }}
        >
          <span
            sx={{
              fontWeight: 600,
            }}
          >
            More speed. Less spend.
          </span>{" "}
          900,000+ developers & businesses use Netlify to run web projects at
          global scale—without servers, devops, or costly infrastructure.
        </Text>
        <Flex alignItems="center">
          <Button {...props} sx={{ marginRight: 4 }}>
            Get Started in seconds
          </Button>
          <CtaLink
            to="/"
            linkText="Questions? Talk to an expert"
            iconName="ArrowRight"
            iconSize="1em"
            iconColor="theme.colors.menuNavItem"
            sx={{
              variant: "links.ctaLink.arrowRight",
              fontWeight: 600,
            }}
          />
        </Flex>
      </div>
    </Container>
  </PanCake>
)
ProHeroClaim.propTypes = {}

ProHeroClaim.defaultProps = {}

export default ProHeroClaim

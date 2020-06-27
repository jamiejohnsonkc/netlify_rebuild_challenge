/** @jsx jsx */
import { jsx, Heading, Text, Styled, Flex } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import "../../../css/fonts.css"
import CtaLink from "../../base/CtaLink"
import Button from "../../base/Button"
import { Link } from "gatsby"
import Icon from "../../base/Icon"
import PanCake from "../../layout/Pancake"

// const str = "Line 1. **new-line** Line 2."

const arr = ["The fastest way to", <br />, "build the fastest sites."]

const HeroClaim = (props) => (
  <PanCake>
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
          marginBottom: 5,
        }}
      >
        {arr}
      </Heading>
      <Text
        sx={{
          variant: "styles.d2",
          marginBottom: 5,
          maxWidth: "63%",
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
  </PanCake>
)
HeroClaim.propTypes = {}

HeroClaim.defaultProps = {}

export default HeroClaim

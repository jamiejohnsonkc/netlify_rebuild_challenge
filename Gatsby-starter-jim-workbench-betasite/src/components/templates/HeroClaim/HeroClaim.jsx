/** @jsx jsx */
import { jsx, Heading, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import "../../../css/fonts.css"
import CtaLink from "../../base/CtaLink"
import Button from "../../base/Button"

const HeroClaim = (props) => (
  <div
    as="Section"
    {...props}
    sx={{
      variant: "layout.intro",
      display: "grid",
    }}
  >
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
        The fastest way to build the fastest sites.
      </Heading>
      <Text
        sx={{
          variant: "styles.d2",
          marginBottom: 5,
          maxWidth: "63%",
        }}
      >
        More speed. Less spend. 900,000+ developers & businesses use Netlify to
        run web projects at global scale—without servers, devops, or costly
        infrastructure.
      </Text>
      <div>
        <Button {...props} sx={{ marginRight: 4 }}>
          Get Started in seconds
        </Button>
        <CtaLink linkVariant="links.ctaLink" iconName="ArrowRight">
          Questions? Talk to an expert
        </CtaLink>
      </div>
    </div>
  </div>
)
HeroClaim.propTypes = {}

HeroClaim.defaultProps = {}

export default HeroClaim

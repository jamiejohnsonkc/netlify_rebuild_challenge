/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import CtaLink from "./CtaLink"
import palette from "@palette"

export default {
  title: "Navigation/Links/Call to Action",
}

export const standard = () => (
  <>
    <CtaLink
      to="/"
      linkText="Questions? Talk to an expert"
      iconName="ArrowRight"
      iconSize="1em"
      iconColor={`${palette.teal}`}
      sx={{
        variant: "links.ctaLink.arrowRight",
        color: "#000",
        "&:hover": {
          color: "#888",
        },
      }}
    />
  </>
)

/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import CtaLink from "./CtaLink"

export default {
  title: "CtaLink",
}

export const standard = () => (
  <>
    <CtaLink
      to="/"
      linkText="Questions? Talk to an expert"
      iconName="ArrowRight"
      iconSize="1em"
      iconColor="#000"
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

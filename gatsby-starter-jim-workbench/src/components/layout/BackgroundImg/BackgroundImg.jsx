/** @jsx jsx */
import { jsx, Box, Text, Styled } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import useBackgroundImage from "../../hooks/useBackgroundImage/useBackgroundImage"

const BackgroundImg = ({ className, props, children }) => {
  const imageData = useBackgroundImage()

  // Set ImageData.

  return (
    <BackgroundImage
      {...props}
      Tag="section"
      className={"BgImage"}
      fluid={imageData}
      backgroundColor={`#040e18`}
      sx={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "100%",
        "&::before": {
          opacity: "0.15 !important",
        },
        "&::after": {
          opacity: "0.15",
        },
      }}
    >
      {children}
    </BackgroundImage>
  )
}
export default BackgroundImg

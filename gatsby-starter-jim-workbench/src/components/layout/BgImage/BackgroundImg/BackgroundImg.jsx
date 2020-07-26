/** @jsx jsx */
import { jsx, Box, Text, Styled } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import useBackgroundImage from "../../../hooks/useBackgroundImage"

const BackgroundImg = ({ className, props }) => {
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
      <Box
        {...props}
        sx={{
          p: 4,
          width: "51%",
        }}
      >
        <Styled.h1>Lorem irure reprehenderit magna nisi sunt.</Styled.h1>
        <Text>
          Est irure Lorem incididunt eiusmod labore dolor eiusmod elit ex
          incididunt. Duis aliqua nulla nulla do ad laborum laboris nulla mollit
          do dolore culpa tempor deserunt. Anim sint aute ut quis cillum
          proident eu laborum.
        </Text>
      </Box>
    </BackgroundImage>
  )
}
export default BackgroundImg

/** @jsx jsx */
import { jsx, Box, Styled, Text } from "theme-ui"
import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import useBackgroundImage from "../../hooks/useBackgroundImage"

const BackgroundContainer = ({ className, props }) => {
  const imageData = useBackgroundImage()

  // Set ImageData.

  return (
    <BackgroundImage
      {...props}
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      sx={{
        height: "100%",
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

const BackgroundImageContainer = styled(BackgroundContainer)`
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    opacity: 0.15 !important;
  }
  &::after {
    opacity: 0.15;
  }
`

export default BackgroundImageContainer

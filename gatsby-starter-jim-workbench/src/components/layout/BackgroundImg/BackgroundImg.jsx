/** @jsx jsx */
import { jsx, Box, Styled, Text } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import useBackgroundImage from "../../hooks/useBackgroundImage"

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const backgroundImg = {
  opacity: "100%",
}

const Content = (props) => (
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
      incididunt. Duis aliqua nulla nulla do ad laborum laboris nulla mollit do
      dolore culpa tempor deserunt. Anim sint aute ut quis cillum proident eu
      laborum.
    </Text>
  </Box>
)

const BackgroundImg = ({ className, props }) => {
  const data = useBackgroundImage()
  return (
    <BackgroundContainer>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={data}
        backgroundColor="#040e18"
        sx={{
          height: "100%",
          "& ::before": {
            opacity: "50%",
          },
        }}
      >
        <Content />
      </BackgroundImage>
    </BackgroundContainer>
  )
}

export default BackgroundImg

/** @jsx jsx */
import { jsx, Box, Text, Styled } from "theme-ui"
import React from "react"
import BackgroundImg from "./BackgroundImg"

export default {
  title: "Layout Elements /Containers/Backgrounds/Background Image Container",
}

export const standard = ({ children, ...props }) => (
  <BackgroundImg {...props} className={"BgImage"}>
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
        do dolore culpa tempor deserunt. Anim sint aute ut quis cillum proident
        eu laborum.
      </Text>
    </Box>
  </BackgroundImg>
)

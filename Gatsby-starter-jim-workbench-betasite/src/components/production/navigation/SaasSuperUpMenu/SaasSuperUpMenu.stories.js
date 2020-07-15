/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui"
import React from "react"
import SaasSuperUpMenu from "./SaasSuperUpMenu"

export default {
  title: "SaasSuperUpMenu",
}

export const standard = (props) => (
  <Container>
    <Box
      {...props}
      sx={{
        height: "80vh",
        width: "100%",
        paddingTop: 8,
      }}
    >
      <SaasSuperUpMenu />
    </Box>
  </Container>
)

/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui"
import React from "react"
import ProSuperUpMenu from "./ProSuperUpMenu"

export default {
  title: "Production/ProSuperUpMenu",
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
      <ProSuperUpMenu />
    </Box>
  </Container>
)

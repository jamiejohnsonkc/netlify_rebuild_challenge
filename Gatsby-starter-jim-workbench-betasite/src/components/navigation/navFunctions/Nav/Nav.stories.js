import React from "react"
import Nav from "./Nav"
import Navbar from "../Navbar"
import { Container } from "theme-ui"

export default {
  title: "Nav",
}

export const standard = () => (
  <Container>
    <Nav>
      <Navbar />
    </Nav>
  </Container>
)

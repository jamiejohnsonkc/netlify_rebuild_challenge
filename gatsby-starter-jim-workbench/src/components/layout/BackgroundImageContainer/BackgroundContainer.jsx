/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const BackgroundContainer = ({ props, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default BackgroundContainer

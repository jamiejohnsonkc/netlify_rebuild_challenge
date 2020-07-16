/** @jsx jsx */
import { jsx, Container, Box, Text, Styled } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import ProSuperUpMenu from "../../../navigation/ProSuperUpMenu"
import ProSocialIconsBar from "../ProSocialIconsBar"
import ProBottom from "../ProBottom"

const ProFooter = (props) => (
  <Container>
    <Box>
      <Styled.h5
        {...props}
        sx={{
          textAlign: "center",
          mx: "auto",
          marginTop: 4,
        }}
      >
        © {new Date().getFullYear()} Netlify
      </Styled.h5>
    </Box>
    <ProSocialIconsBar />
    <ProSuperUpMenu />
    <ProBottom />
  </Container>
)

ProFooter.propTypes = {}

ProFooter.defaultProps = {}

export default ProFooter

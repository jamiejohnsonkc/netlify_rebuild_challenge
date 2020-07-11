/** @jsx jsx */
import { jsx, Container, Box, Text, Styled } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import SaasSuperUpMenu from "../../../navigation/SaasSuperUpMenu"
import SaasSocialIconsBar from "../SaasSocialIconsBar"
import SaasBottom from "../SaasBottom"

const SaasFooter = (props) => (
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
    <SaasSocialIconsBar />
    <SaasSuperUpMenu />
    <SaasBottom />
  </Container>
)

SaasFooter.propTypes = {}

SaasFooter.defaultProps = {}

export default SaasFooter

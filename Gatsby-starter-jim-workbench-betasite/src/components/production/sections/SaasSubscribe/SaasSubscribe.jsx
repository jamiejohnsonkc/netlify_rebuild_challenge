/** @jsx jsx */
import { jsx, Container, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../../layout/Pancake"
import NetlifyGlyph from "../../../../svg/assets/Netlify_glyph.svg"
import Email_SignUp from "../../../inputs/Forms/Email_SignUp"

const SaasSubscribe = (props) => (
  <Pancake
    {...props}
    sx={{
      paddingBottom: 4,
    }}
  >
    <Container
      {...props}
      sx={{
        textAlign: "center",
      }}
    >
      <NetlifyGlyph
        {...props}
        sx={{
          width: "3em",
          mb: 2,
        }}
      />
      <Text
        {...props}
        sx={{
          fontWeight: 500,
          mb: 3,
        }}
      >
        Stay up to date with all Jamstack & Netlify news
      </Text>
      <Email_SignUp />
    </Container>
  </Pancake>
)

SaasSubscribe.propTypes = {}

SaasSubscribe.defaultProps = {}

export default SaasSubscribe

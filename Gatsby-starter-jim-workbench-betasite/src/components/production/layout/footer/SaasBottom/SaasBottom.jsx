/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { SuperLink } from "../../../navigation/SaasSuperUpMenu/SaasSuperUpMenu"

const SaasBottom = (props) => (
  <Box
    {...props}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      my: 4,
    }}
  >
    <SuperLink
      to="/"
      {...props}
      sx={{
        mx: 2,
      }}
    >
      Jamstack
    </SuperLink>
    <SuperLink
      to="/"
      {...props}
      sx={{
        mx: 2,
      }}
    >
      Privacy
    </SuperLink>
    <SuperLink
      to="/"
      {...props}
      sx={{
        mx: 2,
      }}
    >
      GDPR
    </SuperLink>
    <SuperLink
      to="/"
      {...props}
      sx={{
        mx: 2,
      }}
    >
      DMCA
    </SuperLink>
    <SuperLink
      to="/"
      {...props}
      sx={{
        mx: 2,
      }}
    >
      Abuse
    </SuperLink>
  </Box>
)

SaasBottom.propTypes = {}

SaasBottom.defaultProps = {}

export default SaasBottom

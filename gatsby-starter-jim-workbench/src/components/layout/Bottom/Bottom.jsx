/** @jsx jsx */
import { Styled, jsx, Divider, Container } from "theme-ui"
import PropTypes from "prop-types"
import React from "react"

const Bottom = (props) => (
  <Styled.div
    sx={{
      variant: "layout.bottom",
    }}
  >
    <Divider />
    <Container>
      <div sx={{ variant: "text.legal", pt: 2, pb: 2, color: "text" }}>
        © {new Date().getFullYear()} Jamie Johnson
      </div>
    </Container>
  </Styled.div>
)

Bottom.propTypes = {
  siteTitle: PropTypes.string,
}

Bottom.defaultProps = {
  siteTitle: ``,
}

export default Bottom

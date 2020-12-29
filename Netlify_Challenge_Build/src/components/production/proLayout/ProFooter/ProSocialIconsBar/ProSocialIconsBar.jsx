/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import palette from "@palette"
import Icon from "../../../../base/Icon"

const ProLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  maxwidth: ;
`

const ProSocialIconsBar = (props) => (
  <>
    <ProLinkWrapper
      {...props}
      sx={{
        my: 4,
      }}
    >
      <Icon
        {...props}
        sx={{
          color: `${palette.violetDark}`,
          mx: 2,
        }}
        iconName="FillTwitterCircle"
        size="1.618em"
      />

      <Icon
        {...props}
        sx={{
          color: `${palette.violetDark}`,
          mx: 2,
        }}
        iconName="Github"
        size="1.618em"
      />

      <Icon
        {...props}
        sx={{
          color: `${palette.violetDark}`,
          mx: 2,
        }}
        iconName="Discourse"
        size="1.618em"
      />

      <Icon
        {...props}
        sx={{
          color: `${palette.violetDark}`,
          mx: 2,
        }}
        iconName="Youtube"
        size="1.618em"
      />
    </ProLinkWrapper>
  </>
)

ProSocialIconsBar.propTypes = {}

ProSocialIconsBar.defaultProps = {}

export default ProSocialIconsBar

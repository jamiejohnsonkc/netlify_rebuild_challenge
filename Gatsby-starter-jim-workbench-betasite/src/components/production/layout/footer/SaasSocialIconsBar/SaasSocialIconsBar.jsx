/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { color } from "../../../../../../../jim-workbench-custom-themes/colors"
import Icon from "../../../../base/Icon"

const SaasLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  maxwidth: ;
`

const SaasSocialIconsBar = (props) => (
  <>
    <SaasLinkWrapper
      {...props}
      sx={{
        my: 4,
      }}
    >
      <Icon
        {...props}
        sx={{
          color: `${color.violetDark}`,
          mx: 2,
        }}
        iconName="FillTwitterCircle"
        size="1.618em"
      />

      <Icon
        {...props}
        sx={{
          color: `${color.violetDark}`,
          mx: 2,
        }}
        iconName="Github"
        size="1.618em"
      />

      <Icon
        {...props}
        sx={{
          color: `${color.violetDark}`,
          mx: 2,
        }}
        iconName="Discourse"
        size="1.618em"
      />

      <Icon
        {...props}
        sx={{
          color: `${color.violetDark}`,
          mx: 2,
        }}
        iconName="Youtube"
        size="1.618em"
      />
    </SaasLinkWrapper>
  </>
)

SaasSocialIconsBar.propTypes = {}

SaasSocialIconsBar.defaultProps = {}

export default SaasSocialIconsBar

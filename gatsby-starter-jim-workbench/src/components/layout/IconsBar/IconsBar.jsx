import React from "react"
import PropTypes from "prop-types"
import Icon from "../../base/Icon"
import { IconContext } from "react-icons"
import styled from "@emotion/styled"
import { useThemeUI } from "theme-ui"

const LinkBox = styled.div`
  flex: 1 1 auto;
  width: 2em;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`

const IconsBar = (props) => {
  const context = useThemeUI()
  const { theme } = context

  return (
    <LinkWrapper>
      <IconContext.Provider
        value={{
          style: {
            width: "2em",
            verticalAlign: "sub",
            color: `${theme.colors.accent}`,
          },
        }}
      >
        <LinkBox>
          <Icon
            className="icon"
            iconName="Linkedin"
            style={props.IconsBarStyle}
          />
        </LinkBox>
        <LinkBox>
          <Icon iconName="Twitter" style={props.IconsBarStyle} />
        </LinkBox>
        <LinkBox>
          <Icon iconName="Instagram" style={props.IconsBarStyle} />
        </LinkBox>
        <LinkBox>
          <Icon iconName="Facebook" style={props.IconsBarStyle} />
        </LinkBox>
      </IconContext.Provider>
    </LinkWrapper>
  )
}

IconsBar.propTypes = {}

IconsBar.defaultProps = {}

export default IconsBar

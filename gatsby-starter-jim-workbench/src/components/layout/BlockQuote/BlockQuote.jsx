/** @jsx jsx */
import { jsx, Box, Text, useThemeUI } from "theme-ui"
import Icon from "../../base/Icon"
import React from "react"
import PropTypes from "prop-types"

//TODO deconstruct

const BlockQuote = (props) => {
  const context = useThemeUI()
  const { theme } = context
  return (
    <Box>
      <div
        {...props}
        sx={{
          borderStyle: "solid",
          borderWidth: ".5em",
          width: "6em",
          height: "6em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: `${theme.colors.accent}`,
        }}
      >
        <Icon
          iconName="MdFormatQuote"
          size="4em"
          {...props}
          sx={{
            verticalAlign: "sub",
            margin: "0em",
          }}
        />
      </div>
      <Text
        as="div"
        {...props}
        sx={{
          variant: "text.display",
          fontSize: 3,
          lineHeight: "body",
          paddingLeft: 4,
          paddingTop: 4,
        }}
      >
        Cillum proident qui tempor labore do ex veniam cillum aute pariatur et
        nisi. Commodo eu aliquip non reprehenderit irure dolor qui Lorem
        proident ullamco. Voluptate officia dolor elit nostrud irure ut commodo.
        Velit amet excepteur cupidatat minim anim nisi laborum do dolor.
        Occaecat minim voluptate sunt deserunt in tempor aliqua nulla.
      </Text>
      <Text
        sx={{
          marginTop: 4,
        }}
      >
        <span
          sx={{
            variant: "text.display",
            fontSize: "150%",
            paddingLeft: 4,
            fontWeight: 600,
          }}
        >
          John Doe &#8212; VP Marketing
        </span>
      </Text>
    </Box>
  )
}

BlockQuote.propTypes = {}

BlockQuote.defaultProps = {}

export default BlockQuote

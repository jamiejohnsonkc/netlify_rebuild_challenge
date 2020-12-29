/** @jsx jsx */
import { jsx, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Icon from "../../base/Icon"
import { Link } from "gatsby"
import Button from "../Button"

// const SearchButton = (props) => (
//   <Button
//     {...props}
//     sx={{
//       display: ["flex", "flex", "none", "none"],
//       visibility: ["visible", "visible", "hidden", "hidden"],
//       background: "white",
//       borderRadius: "3em",
//       py: 2,

//       // paddingRight: 6,
//       // paddingLeft: 4,
//       width: "20em",
//       position: "relative",
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//   >
//     <Icon
//       iconName="Search"
//       size="1.618em"
//       color="black"
//       {...props}
//       sx={{
//         marginRight: 2,
//       }}
//     />
//     <NavLink
//       {...props}
//       sx={{
//         color: "black",
//         fontSize: 2,
//         textTransform: "none",
//       }}
//     >
//       Search
//     </NavLink>
//   </Button>
// )

// SearchButton.propTypes = {}

// SearchButton.defaultProps = {}

// export default SearchButton

const SearchButton = ({ flex, width, height, color, ...props }) => (
  <>
    <Link
      {...props}
      to={props.to}
      sx={{
        flex,
        width,
        height,
        color,
      }}
    >
      <Icon
        iconName={props.iconName}
        size={props.iconSize}
        color={props.iconColor}
        padding={props.iconMargin}
        {...props}
        sx={{
          marginRight: 1,
        }}
      />
      {props.linkText}
    </Link>
  </>
)

SearchButton.propTypes = {}

SearchButton.defaultProps = {}

export default SearchButton

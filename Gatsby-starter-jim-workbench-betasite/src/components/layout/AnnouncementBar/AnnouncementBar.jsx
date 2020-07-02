/** @jsx jsx */
import { jsx, Box, Text, Close, IconButton } from "theme-ui"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import RadialButton from "../../inputs/RadialButton"
import { darken, lighten } from "@theme-ui/color"
import Circle from "../../base/Circle"

const AnnouncementBar = (props) => (
  <div
    {...props}
    className="AccouncementBar"
    sx={{
      bg: lighten("primary", 0.5),
      width: "100%",
      textAlign: "center",
      position: "relative",
      display: ["flex", "flex", "flex", "flex"],
      justifyContent: "center",
      alignItems: "center",
      padding: [2, 1, 1, 1],
      zIndex: 3,
      // marginBottom: [0, 0, 2, 4],
    }}
  >
    <div
      {...props}
      className="AccouncementBarContent"
      sx={{
        alignItems: "center",
        position: "relative",
        color: "text",
        fontWeight: "bold",
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Link
        sx={{
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
          fontSize: 0,
          flexWrap: ["wrap", "none", "none", "none"],
          color: darken("primary", 0.25),
          "&:hover": {
            color: "background",
          },
        }}
      >
        <Text
          {...props}
          sx={{
            display: "flex",
            paddingRight: [2, 2, 0, 0],
          }}
        >
          Join us for a product demo - June 30.
        </Text>
        <u
          sx={{
            paddingLeft: [0, 2, 2, 2],
          }}
        >
          Register Now!
        </u>
      </Link>
    </div>
    <Circle
      {...props}
      sx={{
        bg: "primary",
        maxHeight: "1.25em",
        maxWidth: "1.25em",
        display: "flex",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        stroke: "white",
        strokeWidth: "3px",
        alignSelf: "inherit",
        marginLeft: "-10px",
        marginRight: "10px",
      }}
    >
      <Close
        {...props}
        sx={
          {
            // bg: "primary",
          }
        }
      />
    </Circle>
    {/* <RadialButton
      {...props}
      sx={{
        alignSelf: "inherit",
        display: "flex",
        marginLeft: "auto",
      }}
    /> */}
  </div>
)

AnnouncementBar.propTypes = {
  siteTitle: PropTypes.string,
}

AnnouncementBar.defaultProps = {
  siteTitle: ``,
}

export default AnnouncementBar

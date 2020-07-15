/** @jsx jsx */
import { jsx, Box, Text, Close, IconButton } from "theme-ui"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import RadialButton from "../../inputs/RadialButton"
import { darken, lighten } from "@theme-ui/color"
import Circle from "../../base/Circle"

//$  this is the first iteration of an unlinked module. need to refactor and reconfig for resuablity

const AnnouncementBar = (props) => (
  <div
    {...props}
    className="AccouncementBar"
    sx={{
      bg: lighten("primary", 0.005),

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
        // color: "text",
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
        }}
      >
        <Text
          {...props}
          sx={{
            display: "flex",
            paddingRight: [2, 2, 0, 0],
            color: lighten("primary", 50),
            "&:hover": {
              color: lighten("primary", 80),
            },
          }}
        >
          Join us for a product demo - June 30.
        </Text>
        <u
          sx={{
            paddingLeft: [0, 2, 2, 2],
            color: lighten("primary", 99),
          }}
        >
          Register Now!
        </u>
      </Link>
    </div>
    <Close
      {...props}
      sx={{
        bg: darken("primary", 0.075),
        maxHeight: "1.618em",
        maxWidth: "1.618em",
        display: "flex",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        stroke: "white",
        strokeWidth: "1px",
        alignSelf: "inherit",
        marginLeft: "-10px",
        marginRight: "10px",
        borderRadius: "50%",
        p: 1,
        // display: "inlineBlock",
      }}
    />
  </div>
)

AnnouncementBar.propTypes = {
  siteTitle: PropTypes.string,
}

AnnouncementBar.defaultProps = {
  siteTitle: ``,
}

export default AnnouncementBar

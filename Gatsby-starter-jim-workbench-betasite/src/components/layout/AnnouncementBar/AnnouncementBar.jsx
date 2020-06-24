/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import RadialButton from "../../inputs/RadialButton"
import { darken, lighten } from "@theme-ui/color"

const AnnouncementBar = (props) => (
  <div
    {...props}
    className="AccouncementBar"
    sx={{
      bg: lighten("primary", 0.5),
      width: "100%",
      textAlign: "center",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
          color: darken("primary", 0.25),
          "&:hover": {
            color: "background",
          },
        }}
      >
        Join us for a product demo - June 30.
        <u
          sx={{
            paddingLeft: 2,
          }}
        >
          Register Now!
        </u>
      </Link>
    </div>
    <RadialButton
      {...props}
      sx={{
        alignSelf: "inherit",
        display: "flex",
        marginLeft: "auto",
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

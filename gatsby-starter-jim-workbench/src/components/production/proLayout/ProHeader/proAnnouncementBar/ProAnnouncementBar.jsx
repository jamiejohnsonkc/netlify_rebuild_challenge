/** @jsx jsx */
import { jsx, Text, Close } from "theme-ui"
import PropTypes from "prop-types"
import { useState } from "react"
import { Link } from "gatsby"
import { darken, lighten } from "@theme-ui/color"

const ProAnnouncementBar = (props) => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div
      {...props}
      className="AccouncementBar"
      style={{ display: isVisible ? "flex" : "none" }}
      sx={{
        background: `linear-gradient(-45deg,#d4f5ff,#eafaff,#eafaff,#d3f6ef)`,

        width: "100%",
        textAlign: "center",
        position: "relative",
        display: ["flex", "flex", "flex", "flex"],
        justifyContent: "center",
        alignItems: "center",
        padding: [2, 1, 1, 1],
        zIndex: 3,
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
            color: "#215888",
            "&:hover": {
              color: lighten("#215888", 0.25),
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
          <Text
            sx={{
              paddingLeft: [0, 2, 2, 2],
            }}
          >
            Register Now!
          </Text>
        </Link>
      </div>

      <Close
        {...props}
        onClick={() => setIsVisible(false)}
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
        }}
      />
    </div>
  )
}

ProAnnouncementBar.propTypes = {
  siteTitle: PropTypes.string,
}

ProAnnouncementBar.defaultProps = {
  siteTitle: ``,
}

export default ProAnnouncementBar

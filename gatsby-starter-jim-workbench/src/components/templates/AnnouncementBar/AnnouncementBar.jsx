/** @jsx jsx */
import { jsx, Text, Close } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const AnnouncementBar = (props) => (
  <div
    {...props}
    className="AccouncementBar"
    sx={{
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
          {props.announcementText}
        </Text>
        <u
          sx={{
            paddingLeft: [0, 2, 2, 2],
            color: lighten("primary", 99),
          }}
        >
          {props.accouncementCtaText}
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
      }}
    />
  </div>
)

AnnouncementBar.propTypes = {
  accouncementCtaText: PropTypes.any,
  announcementText: PropTypes.any,
}

AnnouncementBar.defaultProps = {}

export default AnnouncementBar

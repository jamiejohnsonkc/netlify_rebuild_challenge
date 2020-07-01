//! LAYOUT

import links from "./links"

export default {
  root: {},
  top: {
    bg: "#999",
    py: 4,
    px: 3,
    fontSize: 5,
  },
  bottom: {
    bg: "transparent",
    fontSize: 0,
  },
  container: {
    maxWidth: ["100%", "100%", "60em", "79em"],
    px: [1, 4, 4, 4],
    display: "block",
    position: "relative",
    margin: "0 auto",
    // mx: "auto",
    // content: {
    //   width: ["75%", "98%", "63%"],
    // },
  },

  containerNarrow: {
    variant: "layout.container",
    maxWidth: ["100%", "100%", "60em", "60em"],
  },

  mastHead: {
    display: "block",
    justifyContent: "center",
    marginTop: [0, 0, 4, 4],
    position: "relative",
    mx: "auto",
    width: "layout.container",
    backgroundColor: [
      "navMenuBackground",
      "navMenuBackground",
      "transparent",
      "transparent",
    ],
    // backgroundColor: "gray",
  },

  footer: {
    backgroundColor: "secondary",
  },

  row: {
    width: "100%",
  },
  paddedRow: {
    width: "100%",
    display: "block",
    padding: [0, 3],
  },

  //sections
  intro: {
    height: `calc(100vh - 18.75rem)`,
    maxHeight: "40.625em",
    minHeight: "26.875em",
  },

  introTop: {
    height: `calc(100vh - 18.75rem)`,
    maxHeight: "40.625em",
    minHeight: "26.875em",
    alignItems: "start",
    paddingTop: 6,
  },

  section: {
    paddingTop: 6,
    paddingBottom: 6, // height: `calc(100vh - 18.75rem)`,
    // maxHeight: "40.625em",
    // minHeight: "26.875em",
  },
  //tabs

  reactTabs: {
    WebkitTapHighlightColor: "transparent",
  },
  reactTabsTabList: {
    borderBottom: "1px solid #aaa",
    margin: "0 0 10px",
    padding: "0",
  },
  reactTabsTab: {
    display: "inline-block",
    border: "1px solid transparent",
    borderBottom: "none",
    bottom: "-1px",
    position: "relative",
    listStyle: "none",
    padding: "6px 12px",
    cursor: "pointer",
  },
  reactTabsTabSelected: {
    background: "#fff",
    borderColor: "#aaa",
    color: "black",
    borderRadius: "5px 5px 0 0",
  },
  reactTabsTabDisabled: {
    color: "GrayText",
    cursor: "default",
  },
  reactTabsTabFocus: {
    boxShadow: `0 0 5px hsl(208, 99%, 50%)`,
    borderColor: `hsl(208, 99%, 50%)`,
    outline: "none",
  },
  reactTabsTabFocusAfter: {
    content: '""',
    position: "absolute",
    height: "5px",
    left: "-4px",
    right: "-4px",
    bottom: "-5px",
    background: "#fff",
  },
  reactTabsTabPanel: {
    display: "none",
  },
  reactTabsTabPanelSelected: {
    display: "block",
  },
}

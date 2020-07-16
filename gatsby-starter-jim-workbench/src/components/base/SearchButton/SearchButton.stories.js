/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import SearchButton from "./SearchButton"

export default {
  title: "SearchButton",
}

export const standard = (props) => (
  <SearchButton
    to="/"
    linkText="Search"
    iconName="Search"
    iconSize="1em"
    iconColor="theme.colors.menuNavItem"
    sx={{
      variant: "links.searchButton",
      textDecoration: "none",
      lineHeight: "1.5",
      "&:hover": {
        textDecoration: "underline",
      },
    }}
  />
)

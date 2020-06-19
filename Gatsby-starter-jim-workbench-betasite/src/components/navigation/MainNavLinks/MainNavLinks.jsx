/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import MainNavLinks from "../MainNavLinks"

const MainMenu = (props) => (
  <div className="MainMenu">
    <MainNavLinks />
  </div>
)
MainMenu.propTypes = {}

MainMenu.defaultProps = {}

export default MainMenu

{
  /* <ul
{...props}
className="navMenu"
sx={{
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
}}
> */
}

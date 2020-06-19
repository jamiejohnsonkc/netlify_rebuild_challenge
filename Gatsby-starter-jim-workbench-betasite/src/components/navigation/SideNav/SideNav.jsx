/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import PageLinksMap2 from "../PageLinksMap2"

const SideNav = (props) => (
  <>
    <Flex>
      <PageLinksMap2 variant="sideNavLinks" />
    </Flex>
  </>
)

SideNav.propTypes = {}

SideNav.defaultProps = {}

export default SideNav

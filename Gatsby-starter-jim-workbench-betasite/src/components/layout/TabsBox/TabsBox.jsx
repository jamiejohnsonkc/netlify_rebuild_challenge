/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const TabsBox = (props) => (
  <Tab>
    <h1>{props.children}</h1>
  </Tab>
)

TabsBox.propTypes = {}

TabsBox.defaultProps = {}

export default TabsBox

/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

export default () => (
  <Tabs
    {...props}
    sx={{
      ".react-tabs__tab--selected": {
        //selected tab styles
      },
    }}
  >
    //! passing any props (including themeui sx ) to TabList breaks the selected
    tab function
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>
    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
)

TabsBlock.propTypes = {}

TabsBlock.defaultProps = {}

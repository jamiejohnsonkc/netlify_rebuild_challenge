/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "./react-tabs.css"
import Button from "../../base/Button"
import Logo1 from "../../../svg/assets/logo-1.svg"
import Logo2 from "../../../svg/assets/logo-2.svg"
import Logo3 from "../../../svg/assets/logo-3.svg"
import Logo4 from "../../../svg/assets/logo-4.svg"
import Logo5 from "../../../svg/assets/logo-5.svg"

const CustomTab = (props) => (
  <Tab {...props}>
    <Button
      variant="pill.grayMark"
      //   {...props}
      //   sx={{
      //     "& svg > .st0": {
      //       fill: "gray6",
      //     },
      //   }}
    >
      {props.children}
    </Button>
  </Tab>
)

CustomTab.tabsRole = "Tab" // Required field to use your custom Tab

const TabsTest = (props) => (
  <Tabs>
    <TabList>
      <CustomTab>
        <Logo1
          {...props}
          sx={{
            width: "6.5em",
          }}
        />
      </CustomTab>
      <CustomTab>
        <Logo2
          {...props}
          sx={{
            width: "6.5em",
          }}
        />
      </CustomTab>
      <CustomTab>
        <Logo3
          {...props}
          sx={{
            width: "6.5em",
          }}
        />
      </CustomTab>
      <CustomTab>
        <Logo4
          {...props}
          sx={{
            width: "4.25em",
          }}
        />
      </CustomTab>
      <CustomTab>
        <Logo5
          {...props}
          sx={{
            width: "6em",
          }}
        />
      </CustomTab>
    </TabList>
    <TabPanel></TabPanel>
    <TabPanel>Panel 2</TabPanel>
  </Tabs>
)

export default TabsTest

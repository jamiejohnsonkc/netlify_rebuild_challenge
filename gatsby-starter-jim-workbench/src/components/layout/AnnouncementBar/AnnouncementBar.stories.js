import React from "react"
import AnnouncementBar from "./AnnouncementBar"
import { withKnobs, text } from "@storybook/addon-knobs"

export default {
  title: "AnnouncementBar",
  decorators: [withKnobs],
}

export const standard = () => (
  <AnnouncementBar siteTitle={text("siteTitle", "")} />
)

/** @jsx jsx */
import { jsx, space } from "theme-ui"
import React from "react"
import IconTextButton from "./IconTextButton"

export default {
  title: "Base/Content Blocks/Icon,text, button",
}

export const standard = () => (
  <div
    sx={{
      width: "280px",
    }}
  >
    <IconTextButton
      iconValue={{
        size: "38%",
      }}
      iconName="Jimglyph"
      iconTitle="JIM Logo"
      sx={{ marginBottom: "3" }}
      textVariant="styles.d2"
      textText="Nisi fugiat do dolor do minim anim ipsum incididunt sit et irure irure ipsum aute"
      buttonVariant="primary"
      buttonContent="Button"
    />
  </div>
)

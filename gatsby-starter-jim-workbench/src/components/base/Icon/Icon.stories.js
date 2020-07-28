import React from "react"

import Icon from "."
import { IconContext } from "react-icons"

export default {
  title: "Base/Graphics/Icon",
}

export const Icons = () => (
  <div>
    <IconContext.Provider
      value={{
        style: {
          width: "3em",
          height: "3em",
          verticalAlign: "sub",
          margin: "1em",
        },
      }}
    >
      <Icon iconName="Jimglyph" />
      <Icon iconName="Instagram" />
      <Icon iconName="Twitter" />
      <Icon iconName="Facebook" />
      <Icon iconName="Linkedin" />
      <Icon iconName="Youtube" />
      <Icon iconName="Messenger" />
      <Icon iconName="Reddit" />
    </IconContext.Provider>
  </div>
)

import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Text, Box } from "theme-ui"
import CheckMarkRnd from "../../templates/elements/CheckMarkRnd"
import { InlineIconAndText } from "../../layout/InlineIconAndText/InlineIconAndText"

const InlineCheckMark = (props) => (
  <CheckMarkRnd
    {...props}
    sx={{
      display: "inline-grid",
      marginRight: 2,
    }}
  />
)

const IconBulletListItem = (props) => (
  <InlineIconAndText
    inlineIcon={<InlineCheckMark />}
    inlineText={props.bulletListText}
  />
)

export default IconBulletListItem

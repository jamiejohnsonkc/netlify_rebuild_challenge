/** @jsx jsx */
import { jsx, Text, Box } from "theme-ui"
import React from "react"
import MonoBlock from "./MonoBlock"
import Button from "../../../inputs/Button"

export default {
  title: "Layout Elements/FlexBlocks/MonoBlock",
}

const flexBlockStyle = { width: "44%" }

const flexBoxStyle = {
  backgroundColor: "muted",
}

const FlexItemContent = (props) => (
  <Box
    sx={{
      py: 4,
      px: 4,
      bg: "white",
    }}
  >
    <Text
      sx={{
        fontSize: 4,
        lineHeight: 1.25,
      }}
    >
      FlexItem Content Goes Here
    </Text>
    <Button
      sx={{
        mr: 2,
        mt: 4,
      }}
      variant="reverseSharp.primary"
    >
      Discover
    </Button>
  </Box>
)

export const standard = (props) => (
  <MonoBlock
    flexBlockStyle={flexBlockStyle}
    flexBoxStyle={flexBoxStyle}
    flexItemContent={<FlexItemContent />}
  />
)

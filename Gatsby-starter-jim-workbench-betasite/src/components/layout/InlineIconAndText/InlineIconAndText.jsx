/** @jsx jsx */
import { jsx } from "theme-ui"
import { Text, Box } from "theme-ui"

export const InlineIconAndText = (props) => (
  <Box
    {...props}
    sx={{
      whiteSpace: "pre",
    }}
  >
    {props.inlineIcon}
    <Text
      {...props}
      sx={{
        display: "inline-block",
      }}
    >
      {props.inlineText}
    </Text>
  </Box>
)

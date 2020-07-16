/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Button from "./Button"

export default {
  title: "Button",
}

export const standard = (props) => (
  <>
    <Button>Button</Button>
    <Button
      sx={{
        marginLeft: 2,
      }}
      variant="secondary"
    >
      Button
    </Button>
    <Button
      sx={{
        marginLeft: 2,
      }}
      variant="accent"
    >
      Button
    </Button>
    <Button
      variant="pill.primary"
      sx={{
        marginLeft: 2,
      }}
    >
      Button
    </Button>
    <Button
      variant="pill.secondary"
      sx={{
        marginLeft: 2,
      }}
    >
      Button
    </Button>
    <Button
      variant="pill.accent"
      sx={{
        marginLeft: 2,
      }}
    >
      Button
    </Button>
    <Button
      variant="reverse.primary"
      sx={{
        marginLeft: 2,
      }}
    >
      Button
    </Button>
    <Button
      variant="reverse.secondary"
      sx={{
        marginLeft: 2,
      }}
    >
      Button
    </Button>
    <Button
      variant="reverse.accent"
      sx={{
        marginLeft: 2,
      }}
    >
      Button
    </Button>
    <Button
      variant="reversePill.primary"
      sx={{
        marginLeft: 2,
      }}
    >
      Button
    </Button>
    <Button
      variant="reversePill.secondary"
      sx={{
        marginLeft: 2,
      }}
    >
      Button
    </Button>
    <Button
      variant="reversePill.accent"
      sx={{
        marginLeft: 2,
      }}
    >
      Button
    </Button>
  </>
)

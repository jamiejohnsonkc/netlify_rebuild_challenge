/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import BackgroundSvg from "./BackgroundSvg"
import cardBlue from "../../../svg/assets/cardBlue.svg"

export default {
  title: "BackgroundSvg",
}

const svgArt = css`
  background-image: url(${cardBlue});
  background-repeat: no-repeat;
`

export const standard = (props) => (
  <div
    {...props}
    sx={{
      height: "20em",
      width: "40em",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <BackgroundSvg svgBackground={svgArt}>
      <h1>Howdy</h1>
    </BackgroundSvg>
  </div>
)

//TODO switchout netlify artwork

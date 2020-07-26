/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import useBackgroundImage from "./useBackgroundImage"

const Background = ({ className, props }) => {
  const data = useBackgroundImage()
  return (
    <>
      <BackgroundImage
        {...props}
        Tag="section"
        className={className}
        fluid={data}
        backgroundColor={`#040e18`}
        sx={{
          height: "100%",
        }}
      >
        {props.children}
      </BackgroundImage>
    </>
  )
}
export default Background

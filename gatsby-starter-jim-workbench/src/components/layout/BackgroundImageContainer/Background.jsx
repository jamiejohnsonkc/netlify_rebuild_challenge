/** @jsx jsx */
import { jsx } from "theme-ui"
import BackgroundImage from "gatsby-background-image"
import useBackgroundImage from "./useBackgroundImage"

export default Background = ({ className, props }) => {
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

/** @jsx jsx */
import { jsx, space } from "theme-ui"
import React from "react"
import ImageTextButton from "./ImageTextButton"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default {
  title: "ImageTextButton",
}

const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`)

const Pic = (props) => {
  return (
    <Img fluid={data.file.childImageSharp.fluid} alt="The Gatsby Astronaut" />
  )
}

export const standard = (props) => (
  <div
    sx={{
      width: "280px",
    }}
  >
    <ImageTextButton
      compImage={<Pic />}
      textVariant="styles.d2"
      textText="Nisi fugiat do dolor do minim anim ipsum incididunt sit et irure irure ipsum aute"
      buttonVariant="primary"
      buttonContent="Button"
    />
  </div>
)

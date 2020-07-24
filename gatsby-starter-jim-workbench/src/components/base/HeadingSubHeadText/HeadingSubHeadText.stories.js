import React from "react"
import HeadingSubHeadText from "./HeadingSubHeadText"

export default {
  title: "Base/Content Blocks/Heading, SubHead, Text",
}

export const standard = () => (
  <HeadingSubHeadText
    headingText="Loro Sin Triante"
    headingVariant="styled.h1"
    subHeadText="Et este vincencia"
    subHeadVariant="styled.h2"
    textText="Lorium Ipsum Dolemet"
    textVariant="styles.d2"
  />
)

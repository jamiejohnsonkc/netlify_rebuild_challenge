import React from "react"
import PropTypes from "prop-types"
import "./Icon.css"
import { JimglyphJson } from "./jsonLogos/Jimglyph.js"
import { GenIcon } from "react-icons"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaFacebookMessenger } from "react-icons/fa"
import { FaRedditAlien } from "react-icons/fa"
import { GoChevronUp } from "react-icons/go"
import { MdFormatQuote } from "react-icons/md"
import { BsArrowRight } from "react-icons/bs"
{
  /*
use the following method to import local icons in json format. svg to json converter available at: https://react-icons-json-generator.surge.sh/
*/
}
const Jimglyph = GenIcon(JimglyphJson)

export const Icon = (props) => {
  switch (props.iconName) {
    case "Jimglyph":
      return <Jimglyph {...props} />
    case "Instagram":
      return <FaInstagram {...props} />
    case "Twitter":
      return <FaTwitter {...props} />
    case "Facebook":
      return <FaFacebookF {...props} />
    case "Linkedin":
      return <FaLinkedinIn {...props} />
    case "Search":
      return <FaSearch {...props} />
    case "Youtube":
      return <FaYoutube {...props} />
    case "Messenger":
      return <FaFacebookMessenger {...props} />
    case "Reddit":
      return <FaRedditAlien {...props} />
    case "ChevronUp":
      return <GoChevronUp {...props} />
    case "MdFormatQuote":
      return <MdFormatQuote {...props} />
    case "ArrowRight":
      return <BsArrowRight {...props} />
  }
}

export default Icon

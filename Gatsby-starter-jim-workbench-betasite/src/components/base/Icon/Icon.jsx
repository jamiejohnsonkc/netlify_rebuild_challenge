import React from "react"
import { GenIcon } from "react-icons"
import { AiFillTwitterCircle } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"
import {
  FaDiscourse,
  FaFacebookF,
  FaFacebookMessenger,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRedditAlien,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import { GoCheck, GoChevronDown, GoChevronUp, GoX } from "react-icons/go"
import { GrRadialSelected } from "react-icons/gr"
import { MdFormatQuote } from "react-icons/md"
import "./Icon.css"
import { JimglyphJson } from "./jsonLogos/Jimglyph.js"

/*
use the following method to import local icons in json format. svg to json converter available at: https://react-icons-json-generator.surge.sh/
*/

const Jimglyph = GenIcon(JimglyphJson)

export const Icon = (props) => {
  switch (props.iconName) {
    case "FillTwitterCircle":
      return <AiFillTwitterCircle {...props} />
    case "Github":
      return <FaGithub {...props} />
    case "Check":
      return <GoCheck {...props} />
    case "CheckNo":
      return <GoX {...props} />
    case "Jimglyph":
      return <Jimglyph {...props} />
    case "Discourse":
      return <FaDiscourse {...props} />
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
    case "ChevronDown":
      return <GoChevronDown {...props} />
    case "ChevronRight":
      return <GoChevronRight {...props} />
    case "ChevronLeft":
      return <GoChevronLeft {...props} />
    case "MdFormatQuote":
      return <MdFormatQuote {...props} />
    case "ArrowRight":
      return <BsArrowRight {...props} />
    case "RadialSelected":
      return <GrRadialSelected {...props} />
  }
}

export default Icon

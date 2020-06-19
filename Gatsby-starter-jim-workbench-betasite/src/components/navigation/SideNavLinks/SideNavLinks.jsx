import React from "react"
import PropTypes from "prop-types"
import { useSiteMenuLinks } from "../../../hooks/use-site-menuLinks"

export default function SideNavLinks() {
  const { link.name, link.link } = useSiteMenuLinks()
  return (
    <div>
      {link.name}
      {link.link}
    </div>
  )
}

SideNavLinks.propTypes = {}

SideNavLinks.defaultProps = {}

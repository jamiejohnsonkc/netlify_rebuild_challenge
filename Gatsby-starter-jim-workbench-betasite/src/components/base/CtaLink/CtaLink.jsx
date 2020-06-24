import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Icon from "../../base/Icon"

const CtaLink = (props) => (
  <>
    <Link variant={props.linkVariant}>
      {props.children}
      <Icon
        iconName={props.iconName}
        sx={{
          variant: "links.ctaIcon",
          width: "2.2em",
          verticalAlign: "middle",
        }}
      />
    </Link>
  </>
)

CtaLink.propTypes = {}

CtaLink.defaultProps = {}

export default CtaLink

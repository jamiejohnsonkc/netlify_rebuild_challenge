import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Hamburger = styled.div`
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    content: "";
    position: absolute;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

Hamburger.propTypes = {}

Hamburger.defaultProps = {}

export default Hamburger

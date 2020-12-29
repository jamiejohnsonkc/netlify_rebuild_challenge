import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Drawer = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    padding-top: 10vh;
    height: 100vh;
    transition: all 0.3s ease-in-out;
    top: 8vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
    background-color: red;
  }
`

Drawer.propTypes = {}

Drawer.defaultProps = {}

export default Drawer

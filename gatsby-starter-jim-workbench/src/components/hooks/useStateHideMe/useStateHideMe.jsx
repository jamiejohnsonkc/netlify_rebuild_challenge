/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React, { useState } from "react"

function HideMe() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div style={{ display: isVisible ? "block" : "none" }}>
      <p>This is the visibility test div</p>
      <button onClick={() => setIsVisible(false)}>Hide me</button>
    </div>
  )
}

export default HideMe

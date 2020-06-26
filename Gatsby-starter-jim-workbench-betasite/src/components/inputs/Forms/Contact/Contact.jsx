/** @jsx jsx */
import {
  jsx,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
} from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Contact = (props) => (
  <div>
    <form
      action="https://getform.io/f/20503eee-1266-42d3-af38-e8c2f7bf4f17"
      method="POST"
    >
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
  </div>
)

Contact.propTypes = {}

Contact.defaultProps = {}

export default Contact

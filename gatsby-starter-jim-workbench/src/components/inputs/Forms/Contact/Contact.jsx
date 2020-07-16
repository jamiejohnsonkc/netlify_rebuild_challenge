/** @jsx jsx */
import {
  jsx,
  Box,
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
      <Label>
        Name
        <Input type="text" name="name" id="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" id="email" />
      </Label>
      <Label>
        Subject
        <Input type="text" name="subject" id="subject" />
      </Label>
      <Label>
        Message
        <Textarea name="message" id="message" rows="5" />
      </Label>
      <button type="submit">Send</button>
      <Input type="reset" value="Clear" />
    </form>
  </div>
)

Contact.propTypes = {}

Contact.defaultProps = {}

export default Contact

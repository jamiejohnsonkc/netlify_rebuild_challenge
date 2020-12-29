/** @jsx jsx */
import { darken } from "@theme-ui/color"

import { Box, Input, jsx, Label, Styled, Text, Textarea } from "theme-ui"
import Button from "../../../../inputs/Button"
import { Link } from "gatsby"

// ProLabel = (props) => (
//   <Label
//     {...props}
//     sx={{
//       variant: "proContact",
//     }}
//   />
// )

const ContactSalesForm = (props) => (
  <Box
    {...props}
    sx={{
      boxShadow: "test5",
      borderRadius: 6,
      px: 4,
      py: 5,
    }}
  >
    <Styled.h3>Contact our sales team</Styled.h3>
    <Text
      {...props}
      sx={{
        variant: "styled.d3",
        marginBottom: 4,
      }}
    >
      Existing customer? Get help with technical issues and general questions by{" "}
      <Link
        to="/"
        {...props}
        sx={{
          color: "highlight",
          textDecoration: "none",
        }}
      >
        visiting our community.
      </Link>
    </Text>
    <Box
      as="form"
      onSubmit={(e) => e.preventDefault()}
      action="https://getform.io/f/20503eee-1266-42d3-af38-e8c2f7bf4f17"
      method="POST"
    >
      <Label htmlFor="name">Your Name</Label>
      <Input type="text" name="name" id="name" mb={3} />
      <Label htmlFor="email">Company Email</Label>
      <Input type="email" name="email" id="email" mb={3} />
      <Label htmlFor="phone">Phone</Label>
      <Input type="tel" name="phone" id="phone" mb={3} />
      <Label htmlFor="Job Title">Job Title</Label>
      <Input type="text" name="JobTitle" id="JobTitle" mb={3} />
      <Label htmlFor="Country">Country</Label>
      <Input type="text" name="Country" id="Country" mb={3} />

      <Label htmlFor="message">Project Details or Questions</Label>
      <Textarea name="message" id="message" rows="6" mb={3} />
      <Button
        {...props}
        sx={{
          color: "white",
          bg: "teal",
          width: "100%",
          borderRadius: 6,
          "&:hover": {
            bg: darken("teal", 0.055),
            borderColor: darken("teal", 0.055),
          },
        }}
      >
        Get In Touch
      </Button>
    </Box>
  </Box>
)

ContactSalesForm.propTypes = {}

ContactSalesForm.defaultProps = {}

export default ContactSalesForm

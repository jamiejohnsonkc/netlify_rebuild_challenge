//! FORMS
import { color } from "./colors"

export default {
  label: {
    fontSize: 1,
    fontWeight: "bold",
    color: color.gray3,
  },
  input: {
    borderColor: color.gray5,
    "&:focus": {
      borderColor: "primary",
      boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      outline: "none",
    },
  },
  select: {
    borderColor: color.gray5,
    "&:focus": {
      borderColor: "primary",
      boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      outline: "none",
    },
  },
  textarea: {
    borderColor: color.gray5,
    "&:focus": {
      borderColor: "primary",
      boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      outline: "none",
    },
  },
  slider: {
    bg: "muted",
  },
  saasContact: {
    label: {
      fontSize: 5,
    },
  },
}

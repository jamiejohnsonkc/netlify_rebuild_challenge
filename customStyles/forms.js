//! FORMS
import palette from "./palette"

export default {
  label: {
    fontSize: 1,
    fontWeight: "bold",
    color: `${palette.gray3}`,
  },
  input: {
    borderColor: `${palette.gray5}`,
    // "&:focus": {
    //   borderColor: "primary",
    //   boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
    //   outline: "none",
    // },
  },
  select: {
    borderColor: `${palette.gray5}`,
    "&:focus": {
      borderColor: "primary",
      boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      outline: "none",
    },
  },
  textarea: {
    borderColor: `${palette.gray5}`,
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

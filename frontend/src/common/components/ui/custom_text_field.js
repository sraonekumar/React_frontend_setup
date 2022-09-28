import * as React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CSSTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& label": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
});

export default function CustomTextField({
  id,
  placeholder,
  variant,
  action,
  value,
  disabled = false,
  inputProps,
  type = "text",
  errorStatus = false,
}) {
  const inputStyle = {
    height: "100px !important",
    width: "100%",
    margin: "15px 10px",
  };
  return (
    <CSSTextField
      error={errorStatus}
      id={id}
      label={placeholder}
      onChange={action}
      variant={variant}
      value={value}
      disabled={disabled}
      style={inputStyle}
      inputProps={inputProps}
      type={type}
      required={true}
    />
  );
}

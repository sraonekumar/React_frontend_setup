import React from "react";
import { Button } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[500]),
  backgroundColor: yellow[500],
  borderRadius: "0px",
  width: "150px",
  fontSize: "20px",
  padding: "5px 0px",
  margin: "10px 0px",
  "&:hover": {
    backgroundColor: yellow[700],
  },
}));

function CustomButton({ msg = "", icon = "", onClick = () => {} }) {
  return (
    <>
      <ColorButton variant="contained" onClick={onClick}>
        {icon.item}
        {msg}
      </ColorButton>
    </>
  );
}

export default CustomButton;

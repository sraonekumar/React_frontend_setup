import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { green, pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: green[600],
    "&:hover": {
      backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: green[600],
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

function CustomSwitch({ id = "", handleChange = "", isChecked = "false" }) {
  const [checked, setChecked] = React.useState(isChecked);

  const onSwitching = (event) => {
    let selected = { id, value: event.target.checked };
    setChecked(event.target.checked);
    if (typeof handleChange === "function") handleChange(selected, event);
  };

  return <GreenSwitch {...label} checked={checked} onChange={onSwitching} />;
}

export default CustomSwitch;

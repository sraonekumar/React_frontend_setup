import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { green, grey } from "@mui/material/colors";

export default function CustomRadioGroups({
  parentLabel = null,
  radioGroup = [],
  customStyle = null,
}) {
  return (
    <FormControl>
      {parentLabel && (
        <FormLabel id="demo-row-radio-buttons-group-label">
          {parentLabel}
        </FormLabel>
      )}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {radioGroup?.map((item, i) => {
          return (
            <FormControlLabel
              sx={customStyle ? customStyle : {}}
              value={item?.value}
              control={
                <Radio
                  sx={{
                    width: "250px",
                    color: grey[800],
                    "&.Mui-checked": {
                      color: grey[600],
                    },
                  }}
                />
              }
              label={item?.label}
              disabled={item?.disabled || false}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

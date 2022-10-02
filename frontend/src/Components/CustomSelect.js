import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CustomSelect({
  label,
  data = [],
  selectedValue = null,
  setSelectedValue = () => {},
  hasError = false,
}) {
  const [value, setValue] = React.useState(selectedValue);

  const handleChange = (event) => {
    setValue(event.target.value);
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          onChange={handleChange}
          error={hasError}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {data?.map((item) => {
            return <MenuItem value={item?.value}>{item?.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}

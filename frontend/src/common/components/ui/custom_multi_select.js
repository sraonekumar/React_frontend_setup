import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    //   width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: 300
      // personName.indexOf(name) === -1
      //   ? theme.typography.fontWeightRegular
      //   : theme.typography.fontWeightMedium,
  };
}

export default function CustomMultiSelect({data = [], handleChange, selectedData, label, disabled=false}) {
  const theme = useTheme();

  return (

      <FormControl sx={{ width: '100%' }} variant="filled">
        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          multiple={false}
          value={selectedData}
          onChange={handleChange}
          required={true}
          disabled={disabled}
          // input={<OutlinedInput label={label} />}
          MenuProps={MenuProps}
        >
          {data.map((item) => (
            <MenuItem
              key={item.id}
              value={item.id}
              style={getStyles(item.name, selectedData, theme)}
            >
              {item.name || item.company_name || item.kpis ||  item.email}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
  );
}

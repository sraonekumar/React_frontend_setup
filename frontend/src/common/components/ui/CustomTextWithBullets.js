import React from 'react'
import {FiberManualRecord} from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";

const CustomTextWithBullets = (props) => {
  return (
   <Typography>
    <FiberManualRecord style={{ width: '10px' ,position: 'relative' ,top: '7px'}}/>
    <span style={{paddingLeft:"5px"}}>
    {props.text}
    </span>
   </Typography>
  )
}

export default CustomTextWithBullets
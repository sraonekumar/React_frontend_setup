import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CustomButtonNoSize({
  round = false,
  disabled,
  id,
  onClick,
  variant,
  title,
}) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        style={{
          borderRadius: 5,
          backgroundColor: "yellow",
          padding: "0px 5px",
          fontSize: "16px",
          height:'40px',
          color:'#000'
      }}
        variant={variant}
        id={id}
        onClick={onClick}
        disabled={disabled}
        round={round}>
        {title}
      </Button>
    </Stack>
  );
}

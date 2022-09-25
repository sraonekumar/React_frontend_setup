import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CustomButton({
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
          borderRadius: 0,
          backgroundColor: "#FFE600",
          padding: "0px 50px",
          fontSize: "16px",
          height:'40px',
          color:'#2E2E38'
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

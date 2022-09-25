import * as React from 'react';
import Box from '@mui/material/Box';

export default function CustomImage({imageURL, width, height}) {
  return (
    <Box>
      <img src={imageURL} width={width} height={height} />
    </Box>
  );
}

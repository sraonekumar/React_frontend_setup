import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

export default function CustomSnackbar({isOpen, msg, onClose}) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={2000}
        onClose={onClose}
        message={msg}
        action={onClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
      />
    </div>
  );
}

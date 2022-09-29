import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import { Alert } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';

export default function CustomSnackbar({
  isOpen,
  msg,
  onClose,
  type = "success",
}) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={2000}
      onClose={onClose}
      action={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Alert severity={type} sx={{ width: "100%" }}>
        {msg}
      </Alert>
    </Snackbar>
  );
}

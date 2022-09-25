import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DashboardCustomTextField from './dashboard_custom_text_field';

export default function CustomFormDialog({ isOpen, submitAction }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>KPIs Approval</DialogTitle>
                <DialogContent>
                    <Grid item md={6}>
                        
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={(v) => { submitAction(v) }}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';



export default function Alert({ showAlert }) {
    const [open_, setOpen] = useState(showAlert.open);
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        setOpen(showAlert.open);
    }, [showAlert])
    const useStyles = makeStyles(() => ({
        root: {
            '& .MuiSnackbarContent-root': {
                backgroundColor: showAlert.type === 'error' ? '#f44336' : '#4caf50'
            }
        }
    }));

    const classes = useStyles();

    return (
        <Snackbar classes={{ root: classes.root }}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={open_}
            onClose={handleClose}
            message={showAlert.message}
        />
    );
}
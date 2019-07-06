import React from 'react';
import Snackbar from '@material-ui/core/snackbar';

export default function Notifier(props) {
    return(
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={props.open}
            autoHideDuration={4000}
            onRequestClose={props.onClose}
            onClose={props.onClose}
            message={<span>{props.message}</span>}
        />
    )
};
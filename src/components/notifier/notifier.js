import React from 'react';
import Snackbar from '@material-ui/core/snackbar';

export default function Notifier(props) {
    return(
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={props.handleOpen}
            autoHideDuration={4000}
            onClose={props.handleClose}
            message={<span>Note archived</span>}
        />
    )
};
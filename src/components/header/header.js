import React from 'react';
import {Button, Grid} from "@material-ui/core";

import useStyles from './style';

export default function Header () {
    const classes = useStyles();
return(
        <Grid
            container
            direction="row"
            justify="flex-end">
            <Button href='#' color="primary" className={classes.button} >Log IN</Button>
        </Grid>
    )
};
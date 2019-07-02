import React from 'react';
import {Typography, Button, Grid, Link} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import LinkButton from '../linkButton';
import Footer from "../footer";

const useStyles = makeStyles(theme => ({
    link:{
        margin: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(3),
    },
    input: {
        display: 'none',
    },
}));

export default function App() {
    const classes = useStyles();
    return (
        <div>
            <Grid
                container
                direction="row"
                justify="flex-end">
                <Button className={classes.button}>Log IN</Button>
            </Grid>
            <Typography variant="h3">
                Product List
            </Typography>
            <Footer/>
        </div>
    )
};


import React from 'react';
import {Typography, Button, Grid} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import Footer from "../footer";
import TableData from "../tableData";
import ModalData from "../modalData";
import TableDataContainer from '../../containers/tableData';

const useStyles = makeStyles(theme => ({
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
                <Button href='#' color="primary" className={classes.button}>Log IN</Button>
            </Grid>
            <Typography variant="h3" style={{margin: '25px'}}>
                Products List
            </Typography>
            <TableDataContainer/>

            <ModalData/>

            <Footer/>
        </div>
    )
};


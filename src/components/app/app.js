import React from 'react';
import {Typography, Button, Grid, Link} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

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
            <Grid container direction="row" justify="space-between" alignItems="flex-end">
                <Grid>
                    <Link
                        className={classes.link}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            alert("I'm a button.");
                        }}
                    >
                        Button Link 1
                    </Link>
                     |
                    <Link
                        className={classes.link}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            alert("I'm a button.");
                        }}
                    >
                         Button Link 2
                    </Link>

                </Grid>
                <Grid>
                    <Link
                        className={classes.link}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            alert("I'm a button.");
                        }}
                    >
                        Button Link 3
                    </Link>
                    |
                    <Link
                        className={classes.link}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            alert("I'm a button.");
                        }}
                    >
                        Button Link 3
                    </Link>
                </Grid>


            </Grid>
        </div>
    )
};


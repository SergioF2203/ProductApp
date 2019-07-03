import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        maxWidth: 475,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Grid container justify='center'>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Beverage
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Pepsi Max
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Active
                    </Typography>
                    <Typography variant="body2" component="p">
                        Price:
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Save</Button>
                    <Button size="small">Exit</Button>
                </CardActions>
            </Card>

        </Grid>
    );
}
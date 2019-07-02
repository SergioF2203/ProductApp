import React from 'react';
import {Link} from "@material-ui/core";
import useStyles from './style';

const LinkButton = (props) => {
    const classes = useStyles();
    return(
        <Link
            className={classes.link}
            component="button"
            variant="body2"
            onClick={() => {
                alert("I'm a button.");
            }}
        >
            {props.title}
        </Link>
    )
};

export default LinkButton;
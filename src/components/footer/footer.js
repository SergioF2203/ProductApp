import React from 'react';
import {Grid} from "@material-ui/core";
import LinkButton from "../linkButton";

const Footer= (props)=>{
    return(
        <Grid container direction="row" justify="space-between" alignItems="flex-end">
            <Grid>
                <LinkButton title="Bussines"/>
                |
                <LinkButton title="About"/>
            </Grid>
            <Grid>
                <LinkButton title="Privacy and Terms"/>
                |
                <LinkButton title="Settings"/>
            </Grid>
        </Grid>)
};

export default Footer;


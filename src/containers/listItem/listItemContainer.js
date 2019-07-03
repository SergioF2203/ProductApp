import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '../../components/listItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 460,
        backgroundColor: theme.palette.background.paper,
    },
    chip: {
        marginRight: theme.spacing(1),
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
}));



export default class ListItemContainer extends React.Component {
    state = {
        categoryID: '100',
        active: true,
        categories: [
            {
                id: '100',
                label: 'Juice and Hot Dairy',
            },
            {
                id: '200',
                label: 'Beverage',
            },
            {
                id: '300',
                label: 'Snack',
            }
        ],
        activity: [
            {
                id: 'true',
                value: 'true'
            },
            {
                id: 'false',
                value: 'false'
            }
        ]
    };


    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };


    render() {
        return (
            <ListItem
                handleChange={this.handleChange}
                values={this.state.categoryID}
                categories={this.state.categories}
                active={this.state.active}
                activity={this.state.activity}

            />
        );
    }
}
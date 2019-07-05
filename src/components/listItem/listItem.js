import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './style';


const ListItem = props => {
    const classes = useStyles();

    return (
        <form onSubmit={() => {
            console.log('...')
        }}>
            <div className={classes.root}>
                <div className={classes.section1}>
                    <Typography variant='h3'>
                        Product's Info
                    </Typography>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <TextField
                                id="name"
                                label={props.textFieldName}
                                placeholder={props.textFieldName}
                                // className={classes.textField}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="price"
                                label={'UAH ' + props.textFieldPrice}
                                placeholder={props.textFieldPrice}
                                // className={classes.textField}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Grid>
                        <TextField
                            id="category"
                            select
                            label={'Category'}
                            className={classes.textField}
                            value={props.values}
                            onChange={props.handleChange('categoryID')}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            helperText="You can change a category"
                            margin="normal"
                        >
                            {props.categories.map(option => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </Grid>
                    <TextField
                        id="active"
                        select
                        label={'Active'}
                        className={classes.textField}
                        value={props.active}
                        onChange={props.handleChange('active')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="You can change an activity"
                        margin="normal"
                    >
                        {props.activity.map(option => (
                            <MenuItem key={option.id} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <Divider variant="middle"/>
                <div className={classes.section3}>
                    <Grid container justify='space-between'>
                        <Grid>
                            <Button color="primary" onClick={props.handleAdd}>Add</Button>
                            <Button color="primary" onClick={props.handleUpdate}>Update</Button>
                        </Grid>
                        <Button color="secondary" onClick={props.handleRemove}>Remove</Button>
                        <Button color="primary" onClick={props.handleExit}>Exit</Button>
                    </Grid>

                </div>
            </div>
        </form>
    );
};

export default ListItem;
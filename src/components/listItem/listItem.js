import React from 'react';
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
                                onBlur={props.handleChangeSelect('name')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="price"
                                label={'UAH ' + props.textFieldPrice}
                                onBlur={props.handleChangeSelect('price')}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Grid>
                        <TextField
                            id="categoryId"
                            select
                            label={'Category'}
                            value={props.values}
                            onChange={props.handleChangeSelect('categoryId')}
                            helperText="You can change a category"
                            margin="normal"
                        >
                            {props.categories.map(option => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>

                    </Grid>
                    <TextField
                        id="active"
                        select
                        label={'Active'}
                        value={props.active}
                        onChange={props.handleChangeSelect('active')}
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
    );
};

export default ListItem;
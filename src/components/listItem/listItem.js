import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
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


const categories = [
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
];

export default function ListItem() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        categoryID: '100'
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };



    return (
        <div className={classes.root}>
            <div className={classes.section1}>
                <Typography variant='h3'>
                    Product's Info
                </Typography>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <TextField
                            id="standard-with-placeholder"
                            label="Sandora"
                            placeholder="Sandora"
                            className={classes.textField}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="standard-with-placeholder"
                            label="UAH 28.10"
                            placeholder="28.10"
                            // className={classes.textField}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <TextField
                    id="standard-select-currency"
                    select
                    label={'Category'}
                    className={classes.textField}
                    value={values.categoryID}
                    onChange={handleChange('categoryID')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="You can change a category"
                    margin="normal"
                >
                    {categories.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <Divider variant="middle" />
            <div className={classes.section3}>
                <Button color="primary">Save</Button>
                <Button color="primary">Exit</Button>

            </div>
        </div>
    );
}
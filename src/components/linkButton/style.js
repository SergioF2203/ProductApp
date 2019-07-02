import {makeStyles} from "@material-ui/core";

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

export default useStyles;
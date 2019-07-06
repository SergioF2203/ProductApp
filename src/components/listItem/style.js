import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 460,
        backgroundColor: theme.palette.background.paper,
        marginTop: '5%',
        marginLeft: '5%',
        marginBottom: '7%'
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

export default useStyles;
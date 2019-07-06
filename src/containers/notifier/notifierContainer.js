import React from 'react';
import Notifier from '../../components/notifier';
import {connect} from "react-redux";
import store from '../../store';
import {clearSnackbar} from "../../actions/snackbarActions";


class NotifierContainer extends React.Component {

    handleClose = () => {
        store.dispatch(clearSnackbar());
    };

    render() {
        return (
            <Notifier
            open={this.props.snackbar.open}
            message={this.props.snackbar.message}
            onClose={this.handleClose}
            />
        )
    }
};

const mapStateToProps = store =>{
    return {
        snackbar: store.snackbar
    }
};

export default connect(mapStateToProps)(NotifierContainer);
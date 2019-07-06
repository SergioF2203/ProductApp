import React from 'react';
import Notifier from '../../components/notifier';


export default class NotifierContainer extends React.Component {
    state = {
        open: true,
        message: '',

    };

    handleOpen = () => {
        this.setState({open: true})
    };

    handleClose = (event, reason) =>{
        // console.log(event);
        // console.log(reason);
        if(reason==="clickaway"){
            return;
        }
        this.setState({open:false})
    };

    render() {
        return (
            <Notifier
            handleClose={this.handleClose}
            handleOpen={this.state.open}
            />
        )
    }
}
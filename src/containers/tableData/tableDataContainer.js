import React from 'react';
import TableData from '../../components/tableData';
import APIProduct from '../../services/productAPI_services';
import {Redirect} from 'react-router-dom';
import Notifier from '../../containers/notifier';


export default class TableDataContainer extends React.Component {
    services = new APIProduct();

    state = {
        redirect: false,
        isSelected: [],
        rows: []
    };

    componentDidMount() {
        this.services.getProducts().then(data =>
            this.setState({
            rows: data
        }));

    }


    handleClickOnRow = (id) => {
        this.setState({
            isSelected: [id],
            redirect: true
        });
    };

    isSelectedItem = (id) => {
        if (id === this.state.isSelected[0]) {
            return true;
        }
    };


    render() {
        const{redirect} = this.state;
        if(redirect){
            return(
                <Redirect to={{pathname: this.state.isSelected[0]}}/>
            )
        }
        return (
            <div>
                <Notifier/>
                <TableData
                    data={this.state.rows}
                    isSelected={this.isSelectedItem}
                    handleClick={this.handleClickOnRow}
                />
            </div>
        );
    }
}
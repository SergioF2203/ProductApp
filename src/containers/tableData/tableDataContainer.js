import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Grid} from "@material-ui/core";
import TableData from '../../components/tableData';
import APIProduct from '../../services/productAPI_services';


export default class TableDataContainer extends React.Component {
    services = new APIProduct();

    state = {
        isSelected: [],
        rows: []
    };

    componentDidMount() {
        this.services.getProducts().then(data=>this.setState({
            rows: data
        }))
    }


    handleClickOnRow = (id) => {
        this.setState({isSelected: [id]})
    };

    isSelectedItem = (id) => {
        if (id === this.state.isSelected[0]) {
            return true;
        }
    };


    render() {
        return (
            <TableData
                data={this.state.rows}
                isSelected={this.isSelectedItem}
                handleClick={this.handleClickOnRow}
            />
        );
    }
}
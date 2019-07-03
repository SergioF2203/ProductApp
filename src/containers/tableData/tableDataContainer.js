import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Grid} from "@material-ui/core";
import TableData from '../../components/tableData';


export default class TableDataContainer extends React.Component {
    state = {
        isSelected: [],
        rows: [
            this.createData(100, 'Sandora', 'Juice', true, 22.12),
            this.createData(200, 'Pepsi MAX', 'Beverage', true, 14.58),
            this.createData(3, 'Lays', 'Snack', true, 19.30),
            this.createData(7, 'Mirinda', 'Beverage', true, 22.30),
            this.createData(8, '7UP', 'Beverage', true, 15.48),
        ]
    };

    createData(id, name, category, active, price) {
        return {id, name, category, active, price};
    };


    handleClickOnRow = (name) => {
        this.setState({isSelected: [name]})
    };

    isSelectedItem = (name) => {
        if (name === this.state.isSelected[0]) {
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
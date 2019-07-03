import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Grid} from "@material-ui/core";


export default class TableData extends React.Component {
    state = {
        isSelected: []
    };


    createData = (id, name, category, active, price) => {
        return {id, name, category, active, price};
    };

    rows = [
        this.createData(100, 'Sandora', 'Juice', true, 22.12),
        this.createData(200, 'Pepsi MAX', 'Beverage', true, 14.58),
        this.createData(3, 'Lays', 'Snack', true, 19.30),
        this.createData(7, 'Mirinda', 'Beverage', true, 22.30),
        this.createData(8, '7UP', 'Beverage', true, 15.48),
    ];

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
            <Grid container justify="center">
                <Grid item xs={9}>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">ID</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Category</TableCell>
                                    <TableCell align="right">Active</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.rows.map(row => (
                                    <TableRow style={{cursor: "pointer"}}
                                              key={row.name}
                                              hover
                                              selected={this.isSelectedItem(row.name)}
                                              onClick={() => this.handleClickOnRow(row.name)}>
                                        <TableCell style={{width: '10%'}}
                                                   component="th"
                                                   scope="row"
                                                   align="center">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.category}</TableCell>
                                        <TableCell align="right">{row.active}</TableCell>
                                        <TableCell style={{width:'10%'}} align="center">{row.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        );
    }

}

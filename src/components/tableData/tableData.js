import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Grid} from "@material-ui/core";

const TableData = (props) => {

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
                            {props.data.map(row => (
                                <TableRow style={{cursor: "pointer"}}
                                          key={row.name}
                                          hover
                                          selected={props.isSelected(row.name)}
                                          onClick={() => props.handleClick(row.name)}>
                                    <TableCell style={{width: '10%'}}
                                               component="th"
                                               scope="row"
                                               align="center">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.category}</TableCell>
                                    <TableCell align="right">{row.active}</TableCell>
                                    <TableCell style={{width: '10%'}} align="center">{row.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default TableData;

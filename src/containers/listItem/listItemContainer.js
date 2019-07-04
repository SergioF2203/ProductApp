import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '../../components/listItem';
import ProductAPI from "../../services/productAPI_services";

// import axios from 'axios';
//
// axios.defaults.baseURL = '/localhost:44307/api';
// axios.defaults.headers.post['Content-type'] = 'application/json';
// axios.defaults.headers.get['Content-type'] = 'application/json';


export default class ListItemContainer extends React.Component {

    services = new ProductAPI();


    state = {
        id: 300,
        categoryID: '100',
        active: true,
        categories: [
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
        ],
        activity: [
            {
                id: 'true',
                value: 'true'
            },
            {
                id: 'false',
                value: 'false'
            }
        ]
    };


    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };


    handleExit() {
        console.log('exit working');
    };

    handleAdd() {

    };

    handleUpdate() {

    };

    handleRemove = () => {
        this.services.removeProduct(this.state.id);
        console.log('done');
    };


    render() {

        return (
            <ListItem
                handleChange={this.handleChange}
                values={this.state.categoryID}
                categories={this.state.categories}
                active={this.state.active}
                activity={this.state.activity}
                handleAdd={this.handleAdd}
                handleExit={this.handleExit}
                handleRemove={this.handleRemove}
                handleUpdate={this.handleUpdate}
            />
        );
    }
}
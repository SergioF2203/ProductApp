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

    handleSave = () => {
        console.log('save working');
        // console.log(this.services.getProducts());
        // this.services.getProducts().then(value=>{
        //     // value.map(item=>(console.log(item.name)))
        //     console.log(value)
        // });

    };

    handleExit() {
        console.log('exit working');
    }


    render() {
        console.log(this.services);

        return (
            <ListItem
                handleChange={this.handleChange}
                values={this.state.categoryID}
                categories={this.state.categories}
                active={this.state.active}
                activity={this.state.activity}
                handleSave={this.handleSave}
                handleExit={this.handleExit}
            />
        );
    }
}
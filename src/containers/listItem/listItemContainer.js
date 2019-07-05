import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '../../components/listItem';
import ProductAPI from "../../services/productAPI_services";
import {Redirect} from 'react-router-dom';

// import axios from 'axios';
//
// axios.defaults.baseURL = '/localhost:44307/api';
// axios.defaults.headers.post['Content-type'] = 'application/json';
// axios.defaults.headers.get['Content-type'] = 'application/json';


export default class ListItemContainer extends React.Component {

    services = new ProductAPI();


    state = {
        product: {},
        redirect: false,
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

    componentWillMount() {
        console.log(this.props.history.location.pathname);
        this.services.getProductById(this.props.match.params.id).then(data=>(
            this.setState({product:{...data}})
        ))
    }


    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };


    handleExit = () => {
        console.log('exit');
        this.setState({redirect: true})
    };

    handleAdd() {

    };

    handleUpdate() {

    };

    handleRemove = () => {
        this.services.removeProduct(this.state.id);
    };


    render() {
        const {redirect} = this.state;
        if(redirect){
            return(
                <Redirect to="/"/>
            )
        }

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
                textFieldName={this.state.product.name}
                textFieldPrice={this.state.product.price}
            />
        );
    }
}
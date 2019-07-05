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
        newProduct: {},
        redirect: false,
        id: null,
        // categoryID: '100',
        active: true,
        categories: [],
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
        this.services.getProductById(this.props.match.params.id).then(data => (
            this.setState({product: {...data}})
        ));
        this.services.getCategories().then(data => (console.log(data)));
        this.services.getCategories().then(data => (
            this.setState({categories: data})
        ));

    }


    handleChange = name => event => {
        console.log(name);
        console.log(event.target.value);
        // const name = event.target.name;
        const value = event.target.value;
        // this.setState({[name]: event.target.value});
        // console.log(name);
        // console.log(value);
        this.setState(prevState => (
            {
                product: {
                    ...prevState.product,
                    [name]: value
                }
            }))
    };

    handleChangeSelect = name => event => {
        console.log(event.target);
        const value = event.target.value;

        this.setState(prevState => (
            {
                product: {
                    ...prevState.product,
                    [name]: value
                }
            }))
    };


    handleExit = () => {
        this.setState({redirect: true})

    };

    handleAdd = () => {
        const {product} = this.state;
        const res = this.services.addProduct({product}).then(
            () => this.setState({redirect: true}
            ));


    };

    handleUpdate = () => {
        const {product} = this.state;
        this.services.putProduct({product}).then(
            () => this.setState({redirect: true}
            ));

    };

    handleRemove = () => {
        this.services.removeProduct(this.state.product.id);
    };


    render() {
        const {redirect} = this.state;
        if (redirect) {
            return (
                <Redirect to="/"/>
            )
        }

        return (
            <ListItem
                handleUpdate={this.handleUpdate}
                handleAdd={this.handleAdd}
                handleChangeSelect={this.handleChangeSelect}
                handleChange={this.handleChange}
                values={this.state.product.categoryId}
                categories={this.state.categories}
                active={this.state.product.active}
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
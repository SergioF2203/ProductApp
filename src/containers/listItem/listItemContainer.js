import React from 'react';
import ListItem from '../../components/listItem';
import ProductAPI from "../../services/productAPI_services";
import {Redirect} from 'react-router-dom';

import store from '../../store';
import {showSnackbar} from "../../actions/snackbarActions";


export default class ListItemContainer extends React.Component {

    services = new ProductAPI();


    state = {
        product: {},
        redirect: false,
        id: null,
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
        this.services.getProductById(this.props.match.params.id).then(data => (
            this.setState({product: {...data}})
        ));
        this.services.getCategories().then(data => (
            this.setState({categories: data})
        ));

    }


    handleChange = name => event => {
        const value = event.target.value;
        this.setState(prevState => (
            {
                product: {
                    ...prevState.product,
                    [name]: value
                }
            }))
    };

    handleChangeSelect = name => event => {
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
        this.redirectFunc();
    };

    handleAdd = () => {
        const {product} = this.state;
        this.services.addProduct({product})
            .then(() => this.redirectFunc());
        store.dispatch(showSnackbar('Item was add'));


    };

    handleUpdate = () => {
        const {product} = this.state;
        this.services.putProduct({product})
            .then(() => this.redirectFunc());
        store.dispatch(showSnackbar('Item was edit'))

    };

    handleRemove = () => {
        this.services.removeProduct(this.state.product.id)
            .then(()=>this.redirectFunc());
        store.dispatch(showSnackbar('Item was remove'));

    };

    redirectFunc() {
        this.setState({redirect: true});
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
                handleExit={this.handleExit}
                handleRemove={this.handleRemove}
                textFieldName={this.state.product.name}
                textFieldPrice={this.state.product.price}
            />
        );
    }
}
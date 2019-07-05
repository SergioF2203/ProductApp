import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:44307/api';
axios.defaults.headers.post['Content-type'] = 'application/json';
axios.defaults.headers.get['Content-type'] = 'application/json';

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    }
};


export default class productAPIservices {

    async getProducts() {
        const res = await axios.get('/product', config);
        return res.data.map(this._transformProductsData)
    };

    async getProductById(id) {
        const res = await axios.get(`/product/${id}`, config);
        console.log(res.data);
        return this._transformProductsData(res.data);
    }

    async getCategories() {
        const res = await axios.get('/categories', config);
        return res.data.map(this._tranformCategoriesData)
    };

    async removeProduct(id) {
        await axios.delete(`/product/${id}`, config);
    }

    async addProduct({product}) {
        const res = await axios.post('/product',
            {
                "name": product.name,
                "price": product.price,
                "categoryId": product.categoryId
            }, config);

        return res.status;
    }

    _transformProductsData = product => {
        let isactive = 'Active';
        if (!product.isActive) {
            isactive = 'Inactive'
        }
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            active: isactive,
            category: product.category.name,
            categoryId: product.category.id
        }
    }

    _tranformCategoriesData = category => {
        return {
            id: category.id,
            name: category.name
        }
    }
};
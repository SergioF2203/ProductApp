import axios from 'axios';

// axios.defaults.baseURL = '/localhost:44307/api';
axios.defaults.headers.post['Content-type'] = 'application/json';
axios.defaults.headers.get['Content-type'] = 'application/json';


export default class productAPIservices {

    async getProducts() {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            }
        };

        const res = await axios.get('https://localhost:44307/api/product', config);
        return res.data.map(this._transformProductsData)
        // const items = res.data.map(this._transformProductsData);
        // return items.map(item=>(console.log(item)));
    }

    _transformProductsData = product => {
        let isactive = 'Active';
        if(product.isActive === false){
            isactive = 'Inactive'
        }
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            active: isactive,
            category: product.category.name
        }
    }
};
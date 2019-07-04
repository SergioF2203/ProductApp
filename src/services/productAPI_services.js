import axios from 'axios';

// axios.defaults.baseURL = '/localhost:44307/api';
axios.defaults.headers.post['Content-type'] = 'application/json';
axios.defaults.headers.get['Content-type'] = 'application/json';



export default class productAPIservices {

    async getProducts() {
        // const config = {
        //     headers: {'Authorization': "Bearer " + access_token}
        // };
        console.log('api service');

        return await axios.get('https://localhost:44307/api/product');
    }
};
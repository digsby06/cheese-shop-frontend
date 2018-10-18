import axios from "axios"

const BASE_URL = 'http://union-cheese.herokuapp.com/api/cheeses'

class ServerAPI {
    constructor() {
        this.client = axios.create({
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        });
    }

    async queryProducts() {
        let url = BASE_URL;

        const data = await this.client.get(url)
            .then(resp => {
                return resp.data.data
            })

        return data
    }

    async getProduct(id) {
        let url = `${BASE_URL}/${id}`;

        const data = await this.client.get(url)
            .then(resp => {
                return resp.data
            })

        return data
    }
}

// export singleton API
const api = new ServerAPI();
export default api;

import axios from 'axios'

const API_URL = 'http://localhost:8081'

class ClientService {

    getClients() {
        return axios.get(`${API_URL}/clients`);
    }

}

export default new ClientService()

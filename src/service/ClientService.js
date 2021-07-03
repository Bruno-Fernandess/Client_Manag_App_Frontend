import axios from 'axios'

const API_URL = 'http://localhost:8081'

class ClientService {

    getClients() {
        return axios.get(`${API_URL}/clients`);
    }

    deleteClient(id) {
        return axios.delete(`${API_URL}/clients/client/${id}`);
    }

}

export default new ClientService()

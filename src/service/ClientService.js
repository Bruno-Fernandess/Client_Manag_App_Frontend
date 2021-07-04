import axios from 'axios'

const API_URL = 'http://localhost:8081'

class ClientService {

    getClients() {
        return axios.get(`${API_URL}/clients`);
    }

    getClientsWithName(name) {
        return axios.get(`${API_URL}/clients/${name}`);
    }

    deleteClient(id) {
        return axios.delete(`${API_URL}/clients/client/${id}`);
    }

    getClient(nif) {
        return axios.get(`${API_URL}/clients/client/${nif}`);
    }

    updateClient(id,cl) {
        return axios.put(`${API_URL}/clients/client/${id}`,cl);
    }

    createClient(cl) {
        return axios.post(`${API_URL}/clients/client`, cl);
    }


}

export default new ClientService()

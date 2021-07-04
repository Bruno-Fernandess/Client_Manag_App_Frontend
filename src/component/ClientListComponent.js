import React, { Component } from 'react'
import ClientService from '../service/ClientService';

class ListClientComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clients: [],
            search: "",
            message: null
        }
        this.getClients = this.getClients.bind(this)
        this.deleteClient = this.deleteClient.bind(this)
        this.updateClient = this.updateClient.bind(this)
        this.addClient = this.addClient.bind(this)
    }

    componentDidMount() {
        this.getClients();
    }



    getClients() {
        ClientService.getClients()
            .then(response => {
                    this.setState({ clients: response.data })
                }
            )
    }

    deleteClient(id) {
        ClientService.deleteClient(id)
            .then(
                response => {
                    this.setState({ message: `Client ${id} Deleted Successfully` })
                    this.getClients()
                }
            )
    }

    handleSearch = () => {
        ClientService.getClientsWithName(this.state.search)
            .then(
                response => {
                    this.setState({ clients: response.data })
                }
            )
    };

    handleSearchChange = (event) => {
        this.setState(prevState => ({ search:  event.target.value }))
        console.log(this.state.search)
    };

    updateClient(nif) {
        this.props.history.push(`/clients/${nif}`)
    }

    addClient() {
        this.props.history.push(`/clients/add`)
    }



    render() {
        return (
            <div className="container p-4">
                <h3>Clients</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}

                <div className="float-start">
                    <form>
                        <div className="input-group mb-3 pt-4">
                            <input type="text" className="form-control" onChange={this.handleSearchChange} placeholder="Search User by Name"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button" onClick={() => this.handleSearch()} >Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="form-group float-end">
                    <button className="btn btn-success" onClick={() => this.addClient()}>Add new Client</button>
                </div>

                <div className="container">
                    <table className="table ">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>NIF</th>
                            <th>Phone Nr</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.clients.map(
                                client =>
                                    <tr key={client.id}>
                                        <td>{client.id}</td>
                                        <td>{client.name}</td>
                                        <td>{client.address}</td>
                                        <td>{client.nif}</td>
                                        <td>{client.phone_nr}</td>
                                        <td><button className="btn btn-secondary" onClick={() => this.updateClient(client.nif)} >Update</button></td>
                                        <td><button className="btn btn-danger" onClick={() => this.deleteClient(client.id)} >Delete</button></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListClientComponent

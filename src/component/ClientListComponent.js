import React, { Component } from 'react'
import ClientService from '../service/ClientService';

class ListClientComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clients: [],
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

                <div className="p-4">
                    <button className="btn btn-success" onClick={() => this.addClient()}>Add new Client</button>
                    <form className="pb-4 float-end" onSubmit={this.handleSubmit}><label>
                        Search client by Name
                        <input type="text" value={this.state.value} onChange={this.handleChange}/> </label>
                        <input type="submit" value="Search"/>
                    </form>
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

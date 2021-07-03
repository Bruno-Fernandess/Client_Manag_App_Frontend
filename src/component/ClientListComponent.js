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
    }

    componentDidMount() {
        this.getClients();
    }

    getClients() {
        ClientService.getClients()
            .then(response => {
                    console.log(response);
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


    render() {
        return (
            <div className="container p-4">
                <h3>Clients</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
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
                                        <td><button className="btn btn-secondary" >Update</button></td>
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

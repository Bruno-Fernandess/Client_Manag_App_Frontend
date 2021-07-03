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


    render() {
        return (
            <div className="container p-4">
                <h3>Clients</h3>
                <div className="container">
                    <table className="table ">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>NIF</th>
                            <th>Phone Nr</th>
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

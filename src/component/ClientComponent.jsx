import React, { Component } from 'react'
import ClientService from '../service/ClientService';

class  ClientComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nif: this.props.match.params.nif,
            client: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleNiFChange = this.handleNiFChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }

    componentDidMount() {
        ClientService.getClient(this.state.nif)
            .then(response =>
                this.setState({client: response.data})
            )
    }

    handleNameChange = (event) => {
        this.setState(prevState => ({
            client: { ...prevState.client, name: event.target.value }
        }))
    };

    handleAddressChange = (event) => {
        this.setState(prevState => ({
            client: { ...prevState.client, address: event.target.value }
        }))
    };

    handleNiFChange = (event) => {
        this.setState(prevState => ({
            client: { ...prevState.client, nif: event.target.value }
        }))
    };

    handlePhoneChange = (event) => {
        this.setState(prevState => ({
            client: { ...prevState.client, phone_nr: event.target.value }
        }))
    };

    handleSubmit() {
        ClientService.updateClient(this.state.client.id,this.state.client)
        this.props.history.push(`/clients/`)
    }

    handleCancel() {
        this.props.history.push(`/clients/`)
    }

    render() {
        let { client, nif } = this.state
        return (
            <div className="container-fluid">
                <div className="text-center"><h2>Client: {client.id}</h2></div>
                <div className="p-4 d-flex justify-content-start ">
                    <form style={{maxWidth: 500, margin: "0 auto"}} onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input  className="form-control" id="InputName" defaultValue={client.name} onChange={this.handleNameChange} placeholder="Enter Name"/>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input  className="form-control" id="InputName" defaultValue={client.address} onChange={this.handleAddressChange} placeholder="Enter Address"/>
                        </div>
                        <div className="form-group">
                            <label>NIF</label>
                            <input  className="form-control" id="InputName"  defaultValue={client.nif} onChange={this.handleNiFChange} placeholder="Enter NIF"/>
                        </div>
                        <div className="form-group">
                            <label>Phone Nr</label>
                            <input  className="form-control" id="InputName"  defaultValue={client.phone_nr} onChange={this.handlePhoneChange} placeholder="Enter Phone Nr"/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary m-2"> Update</button>
                            <button type="button" className="btn btn-secondary m-2"  onClick={() => this.handleCancel()} > Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }


}

export default ClientComponent
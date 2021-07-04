import React, { Component } from 'react'
import ClientService from '../service/ClientService';

class  ClientAddComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            client: {
                    name:"",
                    address:"",
                    nif:"",
                    phone_nr: ""
            }
        }
        this.handleAddUser = this.handleAddUser.bind(this);
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

    handleAddUser(e) {
        e.preventDefault();
        ClientService.createClient(this.state.client)
            .then(() => this.props.history.push('/'))
    }

    handleCancel() {
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="text-center p-4"><h2> Add New Client</h2></div>
                <div className="p-4 d-flex justify-content-start ">
                    <form style={{maxWidth: 500, margin: "0 auto"}} onSubmit={this.handleAddUser}>
                        <div className="form-group">
                            <label>Name</label>
                            <input  className="form-control" id="InputName" onChange={this.handleNameChange} placeholder="Enter Name"/>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input  className="form-control" id="InputName" onChange={this.handleAddressChange} placeholder="Enter Address"/>
                        </div>
                        <div className="form-group">
                            <label>NIF</label>
                            <input  className="form-control" id="InputName" onChange={this.handleNiFChange} placeholder="Enter NIF"/>
                        </div>
                        <div className="form-group">
                            <label>Phone Nr</label>
                            <input  className="form-control" id="InputName"   onChange={this.handlePhoneChange} placeholder="Enter Phone Nr"/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary m-2"> Add</button>
                            <button type="button" className="btn btn-secondary m-2"  onClick={() => this.handleCancel()} > Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }


}

export default ClientAddComponent
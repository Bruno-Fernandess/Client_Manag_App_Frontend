import React, { Component } from 'react'
import ClientService from '../service/ClientService';

class ListClientComponent extends Component {

    render() {
        return (
            <div className="container">
                <h3>Clients</h3>
                <div className="container">
                    <table className="table">
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
                        <tr>
                            <td>1</td>
                            <td>Learn Full stack with Spring Boot and Angular</td>
                            <td>Learn Full stack with Spring Boot and Angular</td>
                            <td>Learn Full stack with Spring Boot and Angular</td>
                            <td>Learn Full stack with Spring Boot and Angular</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListClientComponent

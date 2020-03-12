import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

import { Api } from '../services'
import getStaticData from '../services/getStaticData'
import '../assets/css/reduction.css';
import { Button } from 'reactstrap'


class DynamicTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            submitText: 'Add Task',
        }
    }

    componentDidMount() {
        this.getTaskData();
    }

    _setTitle = (event) => {
        //let title = event.target.name;
        let value = event.target.value;
        this.setState({title: value});
    }

    

    _deleteHandler = (id, index) => {
        if (id.length <= 0) {
          alert("Not valid");
          return false;
        }
        let data = {id: id}
        this.deleteTaskData(data, index);
    }

    _editHandler = (data, index) => {
        this.setState({id:data.id, title: data.title, index, submitText: 'Update Task'});
    }

    deleteTaskData(data, index) {
        var self = this;
        const requestOptions = {
            method: 'delete',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' },
        };
        fetch('http://localhost:8000/api/todos/'+data.id, requestOptions).then(() => {
            let data = self.state.data;
            data.splice(index, 1);
            self.setState({data, title:''});
        })
    }

    _submitHandler = (event) => {
        event.preventDefault();
        let title = this.state.title;
        if (title.length <= 0) {
          alert("Enter Title");
          return false;
        }
        let data = {title: this.state.title}
        if(this.state.id != null) {
            this.updateTaskData(data);
        }else{
            this.addTaskData(data);
        }
    }

    addTaskData(data) {
        var self = this;
        const requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:8000/api/todos', requestOptions)
            .then(res => res.json())
            .then(res => {let data = self.state.data; data.unshift(res); self.setState({id: null, data, title:'', submitText: 'Add Task'}); });
    }

    updateTaskData(data) {
        var self = this;
        let index = self.state.index;
        let id = self.state.id;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:8000/api/todos/'+id, requestOptions)
            .then(res => res.json())
            .then(res => {let data = self.state.data; data[index] = res;  self.setState({id: null, data, title:'', submitText: 'Add Task'}); });
    }

    getTaskData() {
        var self = this;
        const requestOptions = {
            method: 'GET',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        };
        fetch('http://localhost:8000/api/todos', requestOptions)
            .then(res => res.json())
            .then(res => { self.setState({ data: res }); });
    }

    render() {
        return (
            <div className="pad20">
                <div>
                    <form onSubmit={this._submitHandler}>
                        <h1>Add Task</h1>
                        <p>Enter Title:</p>
                        <input
                            type="Title"
                            name="Title"
                            onChange={this._setTitle}
                            value={this.state.title}
                            autocomplete="off"
                        />
                        <input
                            type='submit' value={this.state.submitText}
                        />
                    </form>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {(this.state.data.length > 0) ? this.state.data.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.id}</td>
                                        <td>{value.title}</td>
                                        <td>{value.createdAt}</td>
                                        <td>{value.updatedAt}</td>
                                        <td><button onClick={() => {this._editHandler(value, index)}}>Edit</button><button onClick={() => {this._deleteHandler(value.id, index)}}>Delete</button></td>
                                    </tr>
                                )
                            }) : <tr><td colSpan="5">Loading...</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DynamicTable
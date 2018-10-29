import React, { Component } from 'react';
import './MainForm.css';
import { Container } from 'reactstrap';
import AddTaskForm from '../AddTask/AddTaskForm'
import ShowList from '../ShowList/ShowList';

class MainForm extends Component {
    constructor () {
        super();

        this.state = {
            list: [
                {
                    id: '0',
                    name: 'first task',
                    checked: false,
                    delete: false
                },
                {
                    id: '2',
                    name: 'second task',
                    checked: true,
                    delete: false
                }
            ]
        };
    }

    addItem = (itemName) => {
        console.log(`itemName: ${itemName}` );
        const newItem = {
            id: this.state.list.length,
            name: itemName,
            checked: false,
            delete: false
        }
        const list = [...this.state.list]; // kopiowanie tablicy
        list.push(newItem);
        this.setState({list});
    }

    deleteItem = (itemId) => {
        console.log(`deleteItem itemId: ${itemId}`);
        const indexId = this.state.list.findIndex((item) => item.id === itemId);
        console.log(`deleteItem indexId: ${indexId}`);
        const list = [...this.state.list];
        // list[indexId].delete = true;
        list.splice(indexId, 1);
        this.setState({list});
    }

    toggleChecked = (itemId) => {
        // console.log(`id: ${itemId}`);
        const indexId = this.state.list.findIndex((item) => item.id === itemId);
        console.log(`toggleChecked indexId: ${indexId}`);
        const list = [...this.state.list];
        list[indexId].checked = !list[indexId].checked;
        this.setState({list});
    } 

    render() {
        return(
            <Container>
                <AddTaskForm addItem={this.addItem} />
                <ShowList list={this.state.list} toggleChecked={this.toggleChecked} deleteItem={this.deleteItem} />
            </Container>              
        );
    }
}

export default MainForm;
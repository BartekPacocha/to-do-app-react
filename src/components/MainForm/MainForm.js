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
                    name: 'first task'
                },
                {
                    id: '1',
                    name: 'second task'
                }
            ]
        };
    }

    addItem = (itemName) => {
        console.log(`itemName: ${itemName}` );
        const newItem = {
            id: this.state.list.length,
            name: itemName
        }
        const list = [...this.state.list];
        list.push(newItem);
        this.setState({list});
    }

    render() {
        return(
            <Container>
                <AddTaskForm addItem={this.addItem} />
                <ShowList list={this.state.list} />
            </Container>              
        );
    }
}

export default MainForm;
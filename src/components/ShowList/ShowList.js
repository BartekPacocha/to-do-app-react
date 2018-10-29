import React, { Component } from 'react';
import './ShowList.css';
import { ListGroup, ListGroupItem, Container, Button } from 'reactstrap';

class ShowList extends Component {
    __renderTask(task) {
        return(
            <ListGroupItem
                onClick={() => this.props.toggleChecked(task.id)} 
                key={task.id} 
                className={`text-muted ${ task.checked ? 'task-muted__checked' : '' }`}>
                {task.name}
                <Button onClick={() => this.props.deleteItem(task.id)} color="danger">X</Button>
            </ListGroupItem>
        );
    }

    render() {
        return(
            <Container>
                <ListGroup>
                    {this.props.list.map((task) => this.__renderTask(task))}
                </ListGroup>  
            </Container>              
        );
    }
}

export default ShowList;
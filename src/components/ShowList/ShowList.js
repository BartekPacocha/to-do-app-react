import React, { Component } from 'react';
import './ShowList.css';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';

class ShowList extends Component {
    __renderTask(task) {
        return(
            <ListGroupItem key={task.id} className="text-muted">{task.name}</ListGroupItem>
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
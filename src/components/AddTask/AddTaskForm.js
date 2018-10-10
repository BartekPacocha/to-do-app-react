import React, { Component } from 'react';
import './AddTaskForm.css';
import { Button, Input, Row, Form, Container } from 'reactstrap';

class AddTaskForm extends Component {
    constructor () {
        super();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    clearBtn() {
        this.setState({ value: '' });
    }

    __onClickAddBtn = () => {
        this.props.addItem(this.state.value);
        this.clearBtn();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Form>
                        <Input type="text" name="email" id="exampleEmail" placeholder="Add task"  autoComplete="off" onChange={this.handleChange} value={this.state.value} />
                    </Form>
                        <Button onClick={() => this.clearBtn()} color="danger" block={false}>X</Button>
                        <Button onClick={() => this.__onClickAddBtn()} 
                                color="success" 
                                block={false}
                                disabled={!this.state.value.length}
                        >
                            Add
                        </Button>
                </Row>    
            </Container>
        );
    }
}

export default AddTaskForm;
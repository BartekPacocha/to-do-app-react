import React, { Component } from 'react';
import './AddTask.css';
import { Button, FormGroup, Input } from 'reactstrap';

class AddTask extends Component {
    constructor () {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.clearBtn = this.clearBtn.bind(this);

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

    render() {
        return (
            <div className="AddTask">
                <FormGroup>
                    <Input type="text" name="email" id="exampleEmail" placeholder="Add task"  onChange={this.handleChange} value={this.state.value} />
                </FormGroup>
                <Button bsStyle="primary" onClick={this.clearBtn}>Clear</Button>
            </div>
        );
    }
}

export default AddTask;
import React, {Component} from 'react';
import axios from 'axios';
import {ButtonGroup, Button, Dropdown, Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

class TodoItem extends Component {

  markAsDone = () => {
    const id = this.props.item.id;
    axios({
      method: 'PUT',
      url: 'http://127.0.0.1:8000/todo/' + String(id),
      data: {
        status: 1
      }
    }).then((response) => {
      this.props.refresh();
    });
  };

  deleteItem = () => {
    const id = this.props.item.id;
    axios({
      method: 'DELETE',
      url: 'http://127.0.0.1:8000/todo/' + String(id),
    }).then((response) => {
      this.props.refresh();
    });
  };

  render() {
    const statusColor = ['#cce5ff', '#d4edda', '#f8d7da', '#fff3cd'];
    const mstyle = {
      borderLeftColor: statusColor[this.props.item.priority]
    };
    let settings = null;
    if(this.props.item.status === 0) {
      settings = <Dropdown as={ButtonGroup} drop="right">
        <Button variant="primary" onClick={this.markAsDone}>Mark As Done</Button>

        <Dropdown.Toggle split variant="primary" id="dropdown-split-basic"/>

        <Dropdown.Menu>
          <Dropdown.Item hred="#/action-1">Delete</Dropdown.Item>
          <Dropdown.Item hred="#/action-2">Raise Priority</Dropdown.Item>
          <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    } else {
      settings = <Button variant="primary" onClick={this.deleteItem}>Delete</Button>;
    }

    return (
      <Container className="todo-container">
        <Row className="todo-content" style={mstyle}>
          <Col>
            <Link to={{
              pathname: "/todos/detail",
              state: {item: this.props.item}
            }}><h4>{this.props.item.title}</h4></Link>
          </Col>
          <Col md="auto">
            {settings}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TodoItem;

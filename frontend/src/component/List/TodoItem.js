import React, {Component} from 'react';
import axios from 'axios';
import {ButtonGroup, Button, Dropdown, Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

class TodoItem extends Component {
  render() {
    const statusColor = ['#cce5ff', '#d4edda', '#f8d7da', '#fff3cd'];
    const rnd = Math.floor((Math.random()*4));
    const mstyle = {
      borderLeftColor: statusColor[rnd]
    };
    return (
      <Container className="todo-container">
        <Row className="todo-content" style={mstyle}>
          <Col>
            <Link to="/" className="link"><h4>{this.props.item.title}</h4></Link>
          </Col>
          <Col md="auto">
            <Dropdown as={ButtonGroup} drop="right">
              <Button variant="primary">Mark As Done</Button>

              <Dropdown.Toggle split variant="primary" id="dropdown-split-basic"/>

              <Dropdown.Menu>
                <Dropdown.Item hred="#/action-1">Delete</Dropdown.Item>
                <Dropdown.Item hred="#/action-2">Raise Priority</Dropdown.Item>
                <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TodoItem;

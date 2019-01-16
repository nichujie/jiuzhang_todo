import React, {Component} from 'react';
import axios from 'axios';
import {Tabs, Container, Tab, Button, Form} from "react-bootstrap";
import TodoItem from "./TodoItem";
import './List.css'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      todoList: []
    };
  }

  onTitleChange = (e) => {
    e.preventDefault();
    this.setState({title: e.target.value});
  };

  getTodoList = () => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/todo/',
    }).then((response) => {
      this.setState({
        todoList: response.data
      })
    });
  };

  createItem = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/todo/',
      data: {
        title: this.state.title
      }
    }).then((response) => {
      this.setState((prevState, props) => {
        let todos = prevState.todoList;
        todos.unshift(response.data);
        return {
          todoList: todos,
          title: ''
        }
      });
    });
  };

  render() {
    return (
      <Container>
        <h1>Todo List</h1>
        <Form onSubmit={(e) => this.createItem(e)}>
          <Form.Group controlId="form.title">
            <Form.Control value={this.state.title} onChange={this.onTitleChange}
                          placeholder="type down things and press Enter to create items quickly"/>
          </Form.Group>

        </Form>
        <Tabs defaultActiveKey="undone"
              onSelect={this.getTodoList}>
          <Tab eventKey="undone" title="Undone">
            {
              this.state.todoList.map((item) => {
                  if (item.status === 0)
                    return <TodoItem item={item} key={item.id} refresh={() => {
                      this.getTodoList()
                    }}/>;
                  else
                    return null;
                }
              )
            }
          </Tab>
          <Tab eventKey="done" title="Done">
            {
              this.state.todoList.map((item) => {
                  if (item.status === 1)
                    return <TodoItem item={item} key={item.id} refresh={() => {
                      this.getTodoList()
                    }}/>;
                  else
                    return null;
                }
              )
            }
          </Tab>
        </Tabs>

      </Container>
    );
  }

  componentDidMount() {
    this.getTodoList()
  }
}

export default List;

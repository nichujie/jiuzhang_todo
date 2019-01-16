import React, {Component} from 'react';
import axios from 'axios';
import {ListGroup, Container} from "react-bootstrap";
import TodoItem from "./TodoItem";
import './List.css'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }

  render() {
    return (
      <Container>
        <h1>Todo List</h1>
        {
          this.state.todoList.map((item) =>
            <TodoItem item={item} key={item.id}/>
          )
        }
      </Container>
    );
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/todo/',
    }).then((response) => {
      console.log(response.data);
      this.setState({
        todoList: response.data
      })
    });
  }
}

export default List;

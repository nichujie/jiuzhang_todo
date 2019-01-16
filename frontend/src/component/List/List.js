import React, {Component} from 'react';
import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [1, 2, 3]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/todo/',
    }).then((response) => {
      console.log(response.data);
      this.setState({
        todoList: response.data
      })
    });
  };

  render() {
    return (
      <div>
        <h1>List</h1>
        <button onClick={(e) => this.handleClick(e)}>233</button>
        <h2>{this.state.todoList}</h2>
      </div>
    );
  }
}

export default List;

import React, {Component} from 'react';
import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/todo/',
    }).then(function (response) {
      console.log(response.data);
    });
  };

  render() {
    return (
      <div>
        <h1>List</h1>
        <button onClick={this.handleClick}>233</button>
        <h2>{this.state.todoList}</h2>
      </div>
    );
  }
}

export default List;

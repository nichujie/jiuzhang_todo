import React, {Component} from 'react';
import {Layout} from 'antd';

import TodoStore from '../store/TodoStore';
import TodoList from "./TodoList";
import TodoCategory from "./TodoList/TodoCategory";
import './App.css';

const {Header, Content, Sider} = Layout;

class TodoApp extends Component<any, any> {
  componentDidMount() {
    TodoStore.fetchTodoList();
  }

  render() {
    return (
      <Layout className="app-page">
        <Sider>
          <TodoCategory/>
        </Sider>
        <Layout>
          <Header className="app-header">
            A Simple Todo App
          </Header>
          <Content className="app-container">
            <div className="app-content">
              <TodoList/>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default TodoApp;

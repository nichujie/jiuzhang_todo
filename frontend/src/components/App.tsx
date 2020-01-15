import React, {Component} from 'react';
import {Layout, Radio, Row} from 'antd';

import TodoStore from '../store/TodoStore';
import TodoList from "./TodoList";
import TodoCategory from "./TodoCategory";
import './App.css';
import TodoCreate from "./TodoList/TodoCreate";
import {RadioChangeEvent} from "antd/es/radio";
import {observer} from "mobx-react";

const {Header, Content, Sider} = Layout;

@observer
class TodoApp extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      sortBy: 'expire'
    }
  }

  componentDidMount() {
    TodoStore.fetchTodoList();
  }

  handleSortChange = (e: RadioChangeEvent) => {
    this.setState({sortBy: e.target.value})
    if (e.target.value === 'expire') TodoStore.sortByExpireDate();
    else TodoStore.sortByPriority();
  };

  render() {
    const {sortBy} = this.state;
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
            <div className="app-create-content">
              <TodoCreate/>
            </div>
            <div className="app-content">
              <Row>
                <div className="sort-button-group">
                  <Radio.Group value={sortBy} onChange={this.handleSortChange}>
                    <Radio.Button value="expire">Large</Radio.Button>
                    <Radio.Button value="priority">Default</Radio.Button>
                  </Radio.Group>
                </div>
              </Row>
              <Row>
                <TodoList/>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default TodoApp;

import React, {Component} from "react";
import {List, Button, Menu, Dropdown} from 'antd';

import TodoStore from "../../store/TodoStore";
import {observer} from "mobx-react";

const menu = (
  <Menu onClick={console.log}>
    <Menu.Item key="1">
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      3rd item
    </Menu.Item>
  </Menu>
);

@observer
class TodoList extends Component<any, any> {

  renderTodoList = () => {
    const todoList = TodoStore.showTodoList;
    return (
      <List
        itemLayout="horizontal"
        dataSource={todoList}
        renderItem={item => {
          const expire_date = new Date(Date.parse(item.expire_date));
          const timeString = expire_date.toLocaleDateString() + ' ' + expire_date.toLocaleTimeString();
          return (
            <List.Item
              actions={[
                <Dropdown.Button type="primary" onClick={console.log} overlay={menu}>
                  Done!
                </Dropdown.Button>
              ]}
            >
              <List.Item.Meta
                title={item.title}
                description={timeString}
              />
            </List.Item>
          )
        }
        }
      />
    )
  };

  render() {
    return this.renderTodoList();
  }
}

export default TodoList;
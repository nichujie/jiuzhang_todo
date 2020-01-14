import React, {Component} from "react";
import {Icon, Menu} from "antd";

import TodoStore from '../../store/TodoStore';

interface IMenuClick {
  key: string
}

class TodoCategory extends Component<any, any> {
  handleClick = (e: IMenuClick) => {
    TodoStore.showType = e.key;
  };

  render() {
    return (
      <Menu
        theme="dark"
        defaultSelectedKeys={['undone']}
        mode="inline"
        onClick={this.handleClick}
      >
        <Menu.Item key="undone">
          <Icon type="clock-circle"/>
          <span>未完成</span>
        </Menu.Item>
        <Menu.Item key="done">
          <Icon type="check-circle"/>
          <span>已完成</span>
        </Menu.Item>
        <Menu.Item key="expired">
          <Icon type="exclamation-circle"/>
          <span>已过期</span>
        </Menu.Item>
      </Menu>
    );
  }
}

export default TodoCategory;
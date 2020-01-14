import React, {Component} from "react";

import {ITodoItem} from '../../constant/Interface';
import {Button, Dropdown, Menu} from "antd";
import {TodoStatus} from "../../constant/params";
import TodoStore from "../../store/TodoStore";

interface OptionProps {
  todo: ITodoItem
}

const menu = (
  <Menu onClick={console.log}>
    <Menu.Item key="1">
      编辑
    </Menu.Item>
    <Menu.Item key="2">
      提升优先级
    </Menu.Item>
    <Menu.Item key="3">
      降低优先级
    </Menu.Item>
  </Menu>
);


class TodoOptions extends Component<OptionProps, any> {
  render() {
    if (this.props.todo.status === TodoStatus.UNDONE) return (
      <Dropdown.Button
        type="primary"
        overlay={menu}
        onClick={() => {
          TodoStore.markAsDone(this.props.todo);
        }}
      >
        完成!
      </Dropdown.Button>
    );
    return (
      <Button type="danger" onClick={() => {
        TodoStore.deleteTodoItem(this.props.todo)
      }}>
        删除
      </Button>
    )
  }
}

export default TodoOptions;
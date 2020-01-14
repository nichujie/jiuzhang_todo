import React, {Component} from "react";
import {observer} from "mobx-react";
import {List, Tag} from 'antd';

import TodoStore from "../../store/TodoStore";
import {ITodoItem} from "../../constant/Interface";
import {PriorityText, PriorityColors} from "../../constant/params";
import TodoOptions from "./TodoOptions";


@observer
class TodoList extends Component<any, any> {
  renderPriority = (todo: ITodoItem) => {
    return <Tag color={PriorityColors[todo.priority]}>
      {PriorityText[todo.priority]}
    </Tag>
  };

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
            <List.Item actions={[<TodoOptions todo={item}/>]}>
              <List.Item.Meta
                title={<div>{item.title + '  '}{this.renderPriority(item)}</div>}
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
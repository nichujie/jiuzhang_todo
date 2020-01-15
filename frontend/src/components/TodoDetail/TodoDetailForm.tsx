import React, {Component, FormEvent} from "react";
import {Form, Button, Col, Row, Input, Select, DatePicker} from 'antd';
import moment from 'moment';

import TodoStore from '../../store/TodoStore';
import {observer} from "mobx-react";
import {TodoPriority} from "../../constant/params";

import './TodoDetail.css';


const {Option} = Select;
const {TextArea} = Input;

function hasErrors(fieldsError: any) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

@observer
class TodoDetailForm extends Component<any, any> {
  componentDidMount() {
    const {form} = this.props;
    const todo = TodoStore.editingTodo;
    let expire_date;
    if (todo?.expire_date) {
      expire_date = moment(Date.parse(todo?.expire_date));
    } else {
      expire_date = null;
    }

    this.props.form.validateFields();

    form.setFieldsValue({
      title: todo?.title,
      content: todo?.content,
      priority: todo?.priority,
      expire_date: expire_date
    });
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        TodoStore.updateEditingTodoItem(values);
      }
    });
  };


  render() {
    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

    const titleError = isFieldTouched('title') && getFieldError('title');

    return (
      <div>
        <Form layout="vertical" hideRequiredMark>
          <Row>
            <Col span={24}>
              <Form.Item label="事项名称">
                {getFieldDecorator('title', {
                  rules: [{required: true, message: '请输入任务名称'}],
                })(<Input/>)}
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Form.Item label="事项内容">
                {getFieldDecorator('content')(<TextArea rows={4} placeholder="描述你的事项..."/>)}
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={10}>
              <Form.Item label="优先级">
                {getFieldDecorator('priority', {
                  rules: [{required: true, message: '请选择优先级'}],
                })(
                  <Select>
                    <Option value={TodoPriority.URGENT}>优先级1</Option>
                    <Option value={TodoPriority.MEDIUM}>优先级2</Option>
                    <Option value={TodoPriority.NORMAL}>优先级3</Option>
                    <Option value={TodoPriority.CASUAL}>优先级4</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item label="到期时间">
                {getFieldDecorator('expire_date', {
                  rules: [{required: true, message: '请选择到期时间'}],
                })(
                  <DatePicker showTime placeholder="选择时间"/>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <div className="todo-detail-modal-button">
          <Button onClick={TodoStore.closeDetailModal} style={{marginRight: 8}}>
            取消
          </Button>
          <Button onClick={this.handleSubmit} type="primary" disabled={hasErrors(getFieldsError())}>
            保存
          </Button>
        </div>
      </div>
    );
  }
}


export default Form.create({name: 'todo_detail'})(TodoDetailForm);


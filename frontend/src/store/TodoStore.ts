import {action, computed, observable} from 'mobx';
import provider from '../utils/provider';

import {ITodoItem} from '../constant/Interface';

class TodoStore {
  @observable todoList = [];

  @computed get undoneTodoList() {
    return [];
  }

  @computed get doneTodoList() {
    return [];
  }

  @computed get expiredTodoList() {
    return [];
  }

  @action fetchTodoList = () => {

  };

  @action sortByPriority = () => {

  };

  @action sortByExpireDate = () => {

  };

  @action raisePriority = (todo: ITodoItem) => {

  };

  @action reducePriority = (todo: ITodoItem) => {

  };

  @action createTodoItem = (todo: ITodoItem) => {

  };

  @action updateTodoItem = (todo: ITodoItem) => {

  };

  @action deleteTodoItem = (todo: ITodoItem) => {

  };
}
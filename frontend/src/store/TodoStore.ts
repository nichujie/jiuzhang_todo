import {action, computed, observable} from 'mobx';
import provider from '../utils/provider';

import {ITodoItem} from '../constant/Interface';
import {TodoStatus} from '../constant/params';

class TodoStore {
  @observable todoList: ITodoItem[] = [];
  @observable showType: string = 'undone';

  @computed get undoneTodoList(): ITodoItem[] {
    return this.todoList.filter((todo) => {
      return todo.status === TodoStatus.UNDONE;
    });
  }

  @computed get doneTodoList(): ITodoItem[] {
    return this.todoList.filter((todo) => {
      return todo.status === TodoStatus.DONE;
    });
  }

  @computed get expiredTodoList(): ITodoItem[] {
    return this.todoList.filter((todo) => {
      const now = new Date();
      const expire_date = new Date(Date.parse(todo.expire_date));
      return expire_date < now;
    });
  }

  @computed get showTodoList(): ITodoItem[] {
    if (this.showType === 'undone') return this.undoneTodoList;
    if (this.showType === 'done') return this.doneTodoList;
    if (this.showType === 'expired') return this.expiredTodoList;
    return this.todoList;
  }

  @action fetchTodoList = (): Promise<any> => {
    return provider.getInstance().get('/todos/')
      .then((response) => {
        this.todoList = response.data;
      })
  };

  @action sortByPriority = () => {
    this.todoList.sort((a, b): number => {
      return a.priority - b.priority;
    })
  };

  @action sortByExpireDate = () => {
    this.todoList.sort((a, b): number => {
      const date1 = Date.parse(a.expire_date);
      const date2 = Date.parse(b.expire_date);
      return date1 - date2;
    })
  };

  @action raisePriority = (todo: ITodoItem) => {
    const newTodo: ITodoItem = Object.assign({}, todo);
    newTodo.priority -= 1;
    this.updateTodoItem(newTodo);
  };

  @action reducePriority = (todo: ITodoItem) => {
    const newTodo: ITodoItem = Object.assign({}, todo);
    newTodo.priority += 1;
    this.updateTodoItem(newTodo);
  };

  @action createTodoItem = (todo: ITodoItem) => {
    return provider.getInstance().post('/todos/', todo)
      .then((response) => {
        this.fetchTodoList();
      })
  };

  @action updateTodoItem = (todo: ITodoItem) => {
    return provider.getInstance().put(`/todos/${todo.id}`, todo)
      .then((response) => {
        this.fetchTodoList();
      })
  };

  @action deleteTodoItem = (todo: ITodoItem) => {
    return provider.getInstance().delete(`/todos/${todo.id}`)
      .then((response) => {
        this.fetchTodoList();
      })
  };

}

const todoStore = new TodoStore();

export default todoStore;
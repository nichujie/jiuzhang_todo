import React from 'react';
import 'antd/dist/antd.css';

import {Button} from 'antd';
import TodoStore from '../store/TodoStore';


const App: React.FC = () => {
  return (
    <div>
      <Button type="primary"
              onClick={() => {
                TodoStore.fetchTodoList();
              }}
      >
        Primary
      </Button>
      <Button type="primary"
              onClick={() => {
                console.log(TodoStore.expiredTodoList);
              }}
      >
        Expire
      </Button>
    </div>
  );
};

export default App;

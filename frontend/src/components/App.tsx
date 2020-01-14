import React from 'react';
import 'antd/dist/antd.css';

import {Button} from 'antd';
import provider from '../utils/provider';


const App: React.FC = () => {
  return (
    <div>
      <Button type="primary"
              onClick={() => {
                provider.getInstance().get('/api/todos/').then(
                  (response) => {
                    console.log(response.data);
                  }
                )
              }}
      >
        Primary
      </Button>
    </div>
  );
};

export default App;

import React from 'react';
import 'antd/dist/antd.css';

import {Button} from 'antd';
import axios from 'axios'

const App: React.FC = () => {
  return (
    <div>
      <Button type="primary"
              onClick={() => {
                axios.create({
                  withCredentials: true
                }).get('http://127.0.0.1:8000/api/todos/')
                  .then((response) => {
                    console.log(response);
                  })
              }}
                >
                Primary
                </Button>
                </div>
                );
              };

      export default App;

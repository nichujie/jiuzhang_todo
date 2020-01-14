import axios from 'axios';
import {API} from '../constant/api';

class Provider {
  getInstance() {
    return axios.create({
      baseURL: API,
      withCredentials: true,
      headers: {
        // TODO:
        "X-CSRFToken": 'XXX',
      },
    });
  }
}

const provider = new Provider();

export default provider;
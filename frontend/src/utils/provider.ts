import axios, {AxiosInstance} from 'axios';
import {API} from '../constant/api';

class Provider {
  getInstance(): AxiosInstance {
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
import axios from '../utils/http';

const hello = {
  getHello() {
    return axios({
      url: '/hello',
      method: 'GET',
      data: {}
    })
  }
};

export default hello;

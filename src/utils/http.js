import axios from 'axios'

axios.interceptors.request.use(
  config => {
    // can add common header for all request
    config.headers = {
      'Content-Type': 'application/json'
    };
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    // can add common handle response
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios

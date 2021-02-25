import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://localhost:5001/api/";
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post:(url: string, body: {}) => axios.post(url, body).then(responseBody), 
  put:(url: string, body: {}) => axios.put(url, body).then(responseBody),
  del:(url: string) => axios.delete(url).then(responseBody)
}

const account = {
  login: (body: {}) => requests.post("account/login", body),
  register: (body: {}) => requests.post("account/register", body)
};

const agent = {
  account
}

export default agent;
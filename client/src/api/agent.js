import axios from 'axios';

axios.defaults.baseURL = "https://localhost:5001/api/";
axios.defaults.responseType = "json";

const methods = {
    get: (url) => axios.get(url),
    put: (url, body) => axios.put(url, body).then(response => response.data),
    post: (url, body) => axios.post(url, body).then(response => response.data),
    delete: (url) => axios.delete(url).then(response => response.data)
};

const userActions = {
    login: (body) => methods.post("account/login", body)
}

export const agent = {
    userActions
}

import axios from 'axios';

//axios.defaults.baseURL = "https://localhost:5001/api/";
axios.defaults.baseURL = "https://localhost:44321/api/";
axios.defaults.responseType = "json";
axios.defaults.headers.common = {'Authorization': `${localStorage.token}`}

const methods = {
    get: (url) => axios.get(url).then(response => response.data),
    put: (url, body) => axios.put(url, body).then(response => response.data),
    post: (url, body) => axios.post(url, body).then(response => response.data),
    delete: (url) => axios.delete(url).then(response => response.data)
};


const userActions = {
    login: (body) => methods.post("account/login", body),
    getUser: (body) => methods.post("account/getUser", body),
    register: (body) => methods.post("account/register", body)
}

const postActions = {
    create: (body) => methods.post("post/", body)
}

export const agent = {
    userActions,
    postActions
}

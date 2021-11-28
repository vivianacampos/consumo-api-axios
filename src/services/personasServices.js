import axios from 'axios';

export const getPersonas = () => {
    console.log(axios.get(`https://jsonplaceholder.typicode.com/users`));
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
}



import axios from 'axios';

 const instance = axios.create({baseURL: "https://proresponse.docmgt.cloud/"});
//const instance = axios.create({baseURL: "https://jsonplaceholder.typicode.com/"});

export default instance;    
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.2:3333'
})

export default api;

//continuar em 48:00 - Lembre de fazer o commit a  cada alteração
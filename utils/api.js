import axios from "axios";

const API = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:3500/api/',
});

export default API;
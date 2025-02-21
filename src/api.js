import axios from "axios";
import {jwtDecode} from 'jwt-decode'


export const BASE_URL = "http://127.0.0.1:8000";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

api.interceptors.request.use(
     (config) => {
        const token = localStorage.getItem("access")
        if(token){
            const decoded = jwtDecode(token)
            const expiry_date = decoded.exp
            const current_time = Date.now() / 1000
            if(current_time < expiry_date){
                config.headers.Authorization = `Bearer ${token}`
            }
        }
        return config
     },
     (error) => {
         return Promise.reject(error);
     }
 );
export default api;
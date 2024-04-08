import axios from "axios";
export const AxiosHandler = axios.create({
    baseURL : "https://dummyjson.com",
    headers : {"Content-Type" : "application/json"}
})
AxiosHandler.interceptors.request.use(
    (config)=>{
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)
AxiosHandler.interceptors.response.use(
    (response)=>{
        return response
    },
    (error)=>{
        return Promise.reject(error)
    }
)
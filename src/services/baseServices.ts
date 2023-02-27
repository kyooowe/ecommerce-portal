//#region Import
import axios from "axios"
//#endregion

// global axios settings
const httpRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

// global http response interceptor
httpRequest.interceptors.response.use(
    (response) => {
        // return data from a response if the API call is success
        return response.data;
    },
    (error) => {
        // return message from a response of API call, or error message from axios, or the error itself in string, if the API call is failed.
        const message =
            error.response?.data?.message || error.message || error.toString();
        return Promise.reject(message);
    }
);

export default httpRequest

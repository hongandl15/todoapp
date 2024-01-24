import axios from "axios";
import { apiCallBegan } from "../api";

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== apiCallBegan.type) return next(action);

        const { url, method, data, onStart, onSuccess, onError } = action.payload;

        if (onStart) dispatch({ type: onStart });
        
        try {

            if(method != null && method !='POST') dispatch({ type: onSuccess, payload: data});
            else{
                const response = await axios.request({
                    baseURL: "https://65a7949394c2c5762da704b3.mockapi.io",
                    url,
                    method,
                    data,
                });
                
                dispatch({ type: onSuccess, payload: response.data });
            }

        } catch (error) {
            if (onError)
                dispatch({ type: onError, payload: { error: error.message } });
            dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
        }
    };

export default api;

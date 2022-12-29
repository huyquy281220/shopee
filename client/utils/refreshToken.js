import axios from "axios";
import jwt_decode from "jwt-decode";

const axiosJWT = axios.create({ withCredentials: true });

axiosJWT.interceptors.request.use(async (config) => {
    const user = localStorage.getItem("user");

    if (user?.accessTokenAuth) {
        const decodedToken = jwt_decode(user.accessTokenAuth);
        if(decodedToken.exp * 1000 < new Date().getTime()) {
            
        }
    }
});

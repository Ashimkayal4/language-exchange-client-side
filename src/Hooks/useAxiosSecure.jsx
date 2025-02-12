import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'https://assignment-eleven-server-side-drab.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response
        }, error => {
            if (error.status === 401 || error.status === 403) {
                logOut()
                    .then(() => {
                        console.log('logout user')
                        navigate('/login')
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            return Promise.reject(error)
        })
    }, [])
    return axiosInstance
};

export default useAxiosSecure;
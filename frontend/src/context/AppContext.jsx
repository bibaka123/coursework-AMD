import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'sonner';


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [token, setToken] = useState()
    const [userData, setUserData] = useState(false)


    const loadUserProfileData = async () => {
        try {
            const { data } = await axios.get(import.meta.env.VITE_BACKEND_URL + '/api/auth/get-profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (data.success) {
                setUserData(data.data.data);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const value = {
        token,
        userData,
        setToken,
        setUserData,
    }

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }

    }, [token])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
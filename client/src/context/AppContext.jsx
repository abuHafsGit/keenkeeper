import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [timeLinens, setTimeLinens] = useState([])
    const [call, setCall] = useState([])
    const [text, setText] = useState([])
    const [video, setVideo] = useState([])
    const [isLoding, setIsLoding] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            const fetchUsers = async () => {
                const res = await fetch('/data.json')
                const users = await res.json()
                setUsers(users)
                setIsLoding(false)
            }
            fetchUsers()
        }, 1000);
    }, [])

    const data = {
        users, setUsers, timeLinens, setTimeLinens, call, setCall, text, setText, video, setVideo, isLoding
    };

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

export const useAppContext = () => {
    return useContext(AppContext)
}
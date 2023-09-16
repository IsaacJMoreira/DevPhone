import react, { useEffect } from "react"

export const LogadoContext = react.createContext({} as IUser)

interface User {
    name: string,
    credential: string,
    token: string
}

interface IUser {
    user?: User,
    setUser: react.Dispatch<react.SetStateAction<User | undefined>>,
}

const getInitLocalStorage = () => {
    const loginUser = localStorage.getItem("userLogado");
    return loginUser ? JSON.parse(loginUser) : []
}

export const LogadoProvider = ({ children }: { children: react.ReactNode }) => {

    const [user, setUser] = react.useState<User | undefined>(getInitLocalStorage);

    useEffect(() => {
        localStorage.setItem('userLogado', JSON.stringify(user))
      }, [user]);

    return <LogadoContext.Provider value={{user, setUser}}>
        {children}
    </LogadoContext.Provider>
}


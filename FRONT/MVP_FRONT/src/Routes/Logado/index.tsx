import react from "react"

interface User {
    name: string,
    credential: string,
    token: string
}

interface IUser {
    user?: User,
    setUser: react.Dispatch<react.SetStateAction<User | undefined>>,
}

export const LogadoContext = react.createContext({} as IUser)

export const LogadoProvider = ({ children }: { children: react.ReactNode }) => {

    const [user, setUser] = react.useState<User | undefined>()

    return <LogadoContext.Provider value={{user, setUser}}>
        {children}
    </LogadoContext.Provider>
}

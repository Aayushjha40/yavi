import React, { useState, createContext } from 'react'

export const UserDataContext = createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        email: '',
        name: '',
    })

        return (
            <div>
                <UserDataContext.Provider value={{user, setUser }}>
                    {children}
                </UserDataContext.Provider>
            </div>
        )
    }

    export default UserContext
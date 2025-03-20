import React, { useState, useEffect, createContext } from 'react';

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/users/profile', { credentials: 'include' }) // Fetch user from backend
            .then(res => res.json())
            .then(data => {
                if (data?.email) {
                    setUser(data);
                } else {
                    setUser(null);
                }
                setLoading(false);
            })
            .catch(() => {
                setUser(null);
                setLoading(false);
            });
    }, []);

    return (
        <UserDataContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContext;

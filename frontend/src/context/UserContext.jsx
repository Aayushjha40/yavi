import React, { createContext, useState } from 'react';

export const UserDataContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <UserDataContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContextProvider;

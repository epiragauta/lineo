// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuth(!!token);
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    setAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

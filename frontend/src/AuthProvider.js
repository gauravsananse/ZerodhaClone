import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

const AUTH_USER_KEY = 'zerodhaAuthUser';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002';
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3001';

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem(AUTH_USER_KEY);

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem(AUTH_USER_KEY);
      }
    }

  }, []);

  const openDashboard = (token) => {
    // Each React app has its own browser storage because they run on different ports.
    // The token in this URL lets the dashboard create its own session.
    window.location.assign(`${DASHBOARD_URL}/?token=${encodeURIComponent(token)}`);
  };

  const signup = async ({ fullName, email, password }) => {
    if (!fullName || !email || !password) {
      return { success: false, message: 'Please complete all fields.' };
    }

    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        return { success: false, message: data.message || 'Could not create your account.' };
      }

      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(data.user));
      setUser(data.user);
      openDashboard(data.token);
      return { success: true };
    } catch (error) {
      return { success: false, message: 'Cannot reach the server. Start the backend and try again.' };
    }
  };

  const login = async ({ email, password }) => {
    if (!email || !password) {
      return { success: false, message: 'Please enter your email and password.' };
    }

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        return { success: false, message: data.message || 'Email or password is incorrect.' };
      }

      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(data.user));
      setUser(data.user);
      openDashboard(data.token);
      return { success: true };
    } catch (error) {
      return { success: false, message: 'Cannot reach the server. Start the backend and try again.' };
    }
  };

  const logout = async () => {
    localStorage.removeItem(AUTH_USER_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, isLoggedIn: Boolean(user) }}>
      {children}
    </AuthContext.Provider>
  );
}

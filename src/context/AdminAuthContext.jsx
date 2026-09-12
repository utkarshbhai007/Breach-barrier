import React, { createContext, useContext, useState } from 'react';
import { authenticateUser } from '../lib/supabaseClient';

const AdminAuthContext = createContext(null);

const STORAGE_AUTH_KEY = 'zeroward_live_auth_session';

export function AdminAuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_AUTH_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const loginAdmin = async (email, password) => {
    const res = await authenticateUser(email, password, 'admin');
    if (res.success && res.user) {
      setCurrentUser(res.user);
      localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(res.user));
    }
    return res;
  };

  const loginEmployee = async (email, password) => {
    const res = await authenticateUser(email, password, 'employee');
    if (res.success && res.user) {
      setCurrentUser(res.user);
      localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(res.user));
    }
    return res;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(STORAGE_AUTH_KEY);
  };

  return (
    <AdminAuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        isSuperAdmin: currentUser?.role === 'SUPER_ADMIN',
        isEmployee: currentUser?.role === 'READ_ONLY',
        portal: currentUser?.portal || (currentUser?.role === 'SUPER_ADMIN' ? 'admin' : 'employee'),
        loginAdmin,
        loginEmployee,
        logout
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}

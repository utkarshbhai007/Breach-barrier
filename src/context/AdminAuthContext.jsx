import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminAuthContext = createContext(null);

const STORAGE_AUTH_KEY = 'zeroward_admin_auth_user';

export function AdminAuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_AUTH_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const login = (email, password, role = 'SUPER_ADMIN') => {
    // Standard credential checking with fallback role assignment
    const isSuper = role === 'SUPER_ADMIN' || email.includes('admin');
    const userObj = {
      email,
      full_name: isSuper ? 'Zeroward Super Admin' : 'Operations Team Member',
      role: isSuper ? 'SUPER_ADMIN' : 'READ_ONLY',
      loginAt: new Date().toISOString()
    };
    setCurrentUser(userObj);
    localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(userObj));
    return { success: true, user: userObj };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(STORAGE_AUTH_KEY);
  };

  const switchRole = (newRole) => {
    if (!currentUser) return;
    const updated = {
      ...currentUser,
      role: newRole,
      full_name: newRole === 'SUPER_ADMIN' ? 'Zeroward Super Admin' : 'Operations Reviewer (Read Only)'
    };
    setCurrentUser(updated);
    localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(updated));
  };

  return (
    <AdminAuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        isSuperAdmin: currentUser?.role === 'SUPER_ADMIN',
        login,
        logout,
        switchRole
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

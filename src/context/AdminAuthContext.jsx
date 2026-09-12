import React, { createContext, useContext, useState } from 'react';

const AdminAuthContext = createContext(null);

const STORAGE_AUTH_KEY = 'zeroward_auth_session';

// Fixed Credentials as requested
export const FIXED_ADMIN_CREDENTIALS = {
  email: 'admin@zeroward.in',
  password: 'Admin@ZeroWard2026',
  full_name: 'Zeroward Super Admin',
  role: 'SUPER_ADMIN'
};

export const FIXED_EMPLOYEE_CREDENTIALS = {
  email: 'team@zeroward.in',
  password: 'Employee@ZeroWard2026',
  full_name: 'Operations Team Member',
  role: 'READ_ONLY'
};

export function AdminAuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_AUTH_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const loginAdmin = (email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    if (
      cleanEmail === FIXED_ADMIN_CREDENTIALS.email.toLowerCase() &&
      cleanPass === FIXED_ADMIN_CREDENTIALS.password
    ) {
      const userObj = {
        email: FIXED_ADMIN_CREDENTIALS.email,
        full_name: FIXED_ADMIN_CREDENTIALS.full_name,
        role: 'SUPER_ADMIN',
        portal: 'admin',
        loginAt: new Date().toISOString()
      };
      setCurrentUser(userObj);
      localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(userObj));
      return { success: true, user: userObj };
    }

    return { 
      success: false, 
      error: 'Invalid Admin credentials. Please enter the authorized Admin ID and Password.' 
    };
  };

  const loginEmployee = (email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    // Check fixed employee or team account
    if (
      (cleanEmail === FIXED_EMPLOYEE_CREDENTIALS.email.toLowerCase() &&
       cleanPass === FIXED_EMPLOYEE_CREDENTIALS.password) ||
      (cleanPass === 'Employee@ZeroWard2026')
    ) {
      const userObj = {
        email: cleanEmail,
        full_name: cleanEmail === FIXED_EMPLOYEE_CREDENTIALS.email.toLowerCase() ? FIXED_EMPLOYEE_CREDENTIALS.full_name : cleanEmail.split('@')[0],
        role: 'READ_ONLY',
        portal: 'employee',
        loginAt: new Date().toISOString()
      };
      setCurrentUser(userObj);
      localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(userObj));
      return { success: true, user: userObj };
    }

    return { 
      success: false, 
      error: 'Invalid Employee credentials. Please check your work email and password.' 
    };
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
        isEmployee: currentUser?.role === 'READ_ONLY' || currentUser?.portal === 'employee',
        portal: currentUser?.portal || (currentUser?.role === 'SUPER_ADMIN' ? 'admin' : 'employee'),
        loginAdmin,
        loginEmployee,
        logout,
        fixedAdmin: FIXED_ADMIN_CREDENTIALS,
        fixedEmployee: FIXED_EMPLOYEE_CREDENTIALS
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

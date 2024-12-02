import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../backend/supabaseClient';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load the user on mount and listen for auth state changes
  useEffect(() => {
    const loadUser = async () => {
      const { data: session } = await supabase.auth.getSession();
      setUser(session?.user || null);

      // Listen for auth state changes
      const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user || null);
      });

      // Cleanup subscription
      return () => subscription.unsubscribe();
    };

    loadUser();
  }, []);

  // Login handler
  const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  // Logout handler
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

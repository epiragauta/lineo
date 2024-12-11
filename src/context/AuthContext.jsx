// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../backend/supabaseClient';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const loadUser = async () => {
      try {
        // Obtener la sesión actual del usuario
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user || null);
      } catch (error) {
        console.error('Error al obtener la sesión:', error);
        setUser(null);
      } finally {
        setLoading(false); // Finaliza la carga después de obtener la sesión
      }

      // Escuchar los cambios en el estado de autenticación
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user || null);
        setLoading(false); // Asegura que loading sea false cuando cambia el estado de auth
      });

      // Cleanup subscription
      return () => {
        subscription.unsubscribe();
      };
    };

    loadUser();
  }, []);

  // Manejador de inicio de sesión
  const login = async (email, password) => {
    setLoading(true); // Inicia el estado de carga al iniciar sesión
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setLoading(false); // Finaliza la carga si hay un error
      throw error;
    }
    // El estado de carga se finalizará en el listener de onAuthStateChange
  };

  // Manejador de cierre de sesión
  const logout = async () => {
    setLoading(true); // Inicia el estado de carga al cerrar sesión
    const { error } = await supabase.auth.signOut();
    if (error) {
      setLoading(false); // Finaliza la carga si hay un error
      throw error;
    }
    // El estado de carga se finalizará en el listener de onAuthStateChange
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

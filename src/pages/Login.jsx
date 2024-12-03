import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../backend/supabaseClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      alert('¡Inicio de sesión exitoso!');
      navigate('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      console.error('Login error:', error.message);
      alert('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-login-bg bg-cover">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-6 rounded shadow-md w-full max-w-xl"
      >
        <h2 className="text-2xl mb-4 text-center">Iniciar Sesión</h2>
        <div className="mb-4">
          <label className="block mb-1">Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-secondary"
        >
          Entrar
        </button>
        <p className="text-center mt-4">
          ¿No tienes una cuenta?{' '}
          <span
            onClick={() => navigate('/signup')}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Regístrate aquí
          </span>
        </p>
        
        <p className="text-center mt-4">
          Olvidaste la contraseña? {' '}
          <span
            onClick={() => navigate('/forgot-password')}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Recuperar contraseña
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

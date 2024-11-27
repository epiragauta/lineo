// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí deberías validar las credenciales con tu backend
    // Para este ejemplo, asumiremos que cualquier entrada es válida
    if (email && password) {
      localStorage.setItem('authToken', 'your-auth-token'); // Guarda el token de autenticación
      navigate('/dashboard');
    } else {
      alert('Por favor, ingresa email y contraseña');
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
          <label className="block mb-1">Email</label>
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full px-3 py-2 border rounded" 
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
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-primary text-white py-2 rounded hover:bg-secondary"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;

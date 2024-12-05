import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../backend/supabaseClient';
import LogoSuper from '../assets/logos/super/super_blanco.png';
import LogoLineo from '../assets/logos/lineo/lineo_blbl.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the success message from state
  React.useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      setMessage('¡Inicio de sesión exitoso!');
      setError('');
      setTimeout(() => navigate('/dashboard'), 1500); // Redirect to dashboard after login
    } catch (error) {
      setMessage('');
      setError('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <div className="flex relative items-center justify-center min-h-screen bg-login-bg bg-cover bg-no-repeat">
      <img src={LogoSuper} alt="Logo Izquierdo" 
       class="absolute top-10 left-10 h-36">
      </img>
      <img src={LogoLineo} alt="Logo Derecho" 
          class="absolute top-10 right-10 h-36"></img>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-6 rounded shadow-md w-full max-w-xl"
      >
        <h2 className="text-2xl mb-4 text-center">Iniciar Sesión</h2>

        {/* Display success or error messages */}
        {message && <div className="text-green-500 text-center mb-4">{message}</div>}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

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
          Olvidaste la contraseña?{' '}
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

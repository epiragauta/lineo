import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../backend/supabaseClient';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      alert('Registro exitoso. Por favor verifica tu correo electrónico para confirmar tu cuenta.');
      navigate('/login'); // Redirect to login after successful sign-up
    } catch (error) {
      console.error('Sign-up error:', error.message);
      setErrorMessage('Error al registrarse: ' + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-6 rounded shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl mb-4 text-center">Crear Cuenta</h2>
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}
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
            placeholder="Crea una contraseña segura"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-secondary"
        >
          Registrarse
        </button>
        <p className="text-center mt-4">
          ¿Ya tienes una cuenta?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Iniciar Sesión
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

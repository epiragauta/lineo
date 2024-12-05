import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../backend/supabaseClient';
import LogoSuper from '../assets/logos/super/super_blanco.png';
import LogoLineo from '../assets/logos/lineo/lineo_blbl.png';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Added state for password confirmation
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      alert('Registro exitoso. Por favor verifica tu correo electrónico para confirmar tu cuenta.');
      navigate('/login'); // Redirect to login after successful sign-up
    } catch (error) {
      console.error('Sign-up error:', error.message);
      setErrorMessage('Error al registrarse: ' + error.message);
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
        <div className="mb-4">
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
        <div className="mb-6">
          <label className="block mb-1">Confirmar Contraseña</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Confirma tu contraseña"
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

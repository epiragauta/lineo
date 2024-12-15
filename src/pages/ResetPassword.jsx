import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "../backend/supabaseClient";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get("access_token"); //eslint-disable-line
  

  const navigate = useNavigate()

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password
      });


      if (error) throw error;

      setMessage("Contraseña actualizada con éxito. Ahora puedes iniciar sesión.");
      setError("");
      navigate('/home') // Goes to dashboard screen

    } catch (error) {
      setError("Error al actualizar la contraseña: " + error.message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-login-bg bg-cover">
      <form
        onSubmit={handlePasswordReset}
        className="bg-white p-6 rounded shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl mb-4 text-center">Restablecer Contraseña</h2>
        {message && <div className="text-green-500 text-center mb-4">{message}</div>}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1">Nueva Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Ingresa tu nueva contraseña"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Confirmar Contraseña</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Confirma tu nueva contraseña"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-secondary"
        >
          Restablecer Contraseña
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;

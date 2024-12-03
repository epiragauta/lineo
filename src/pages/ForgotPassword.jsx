import React, { useState } from "react";
import { supabase } from "../backend/supabaseClient";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Track button state

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true); // Disable the button
    try {
      const redirectUrl = `${window.location.origin}/reset-password`; // Dynamically set redirect URL
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: redirectUrl,
      });

      if (error) throw error;

      setMessage("Correo enviado. Por favor, revisa tu bandeja de entrada.");
      setError("");
    } catch (error) {
      setError("Error al enviar el correo de recuperación: " + error.message);
      setMessage("");
    }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-login-bg bg-cover">
      <form
        onSubmit={handlePasswordReset}
        className="bg-white p-6 rounded shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl mb-4 text-center">Recuperar Contraseña</h2>
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
        <button
          type="submit"
          className={`w-full bg-primary text-white py-2 rounded ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-secondary"
          }`}
          disabled={isButtonDisabled} // Disable button when isButtonDisabled is true
        >
          Enviar Enlace de Recuperación
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { loginUser } from '../../../services/authService';

const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await loginUser(credentials);
      
      // Guardar token en localStorage o en un estado global
      localStorage.setItem('authToken', response.token);
      
      // Redireccionar al usuario a la página principal
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginForm 
      onSubmit={handleLogin}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default LoginContainer;
// src/components/Login.js
import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/category/Inicio'); 
  };

  return (
    <div className="login-container">
      <h1>Bienvenido a nuestra tienda</h1>
      <p>Inicia sesión para explorar los productos</p>
      <button onClick={handleLogin} className="login-button">
        Iniciar Sesión
      </button>
    </div>
  );
}

export default Login;

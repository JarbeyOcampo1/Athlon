// Servicio para manejar las peticiones de autenticación

// URL base de tu API
const API_URL = 'https://tu-api.com/api';

/**
 * Función para iniciar sesión
 * @param {Object} credentials - Objeto con username y password
 * @returns {Promise} - Promesa con la respuesta del servidor
 */
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error en la autenticación');
    }

    return data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

/**
 * Función para verificar si el token es válido
 * @returns {Promise} - Promesa con la respuesta del servidor
 */
export const verifyToken = async () => {
  const token = localStorage.getItem('authToken');
  
  if (!token) {
    throw new Error('No hay token disponible');
  }

  try {
    const response = await fetch(`${API_URL}/auth/verify`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Token inválido');
    }

    return data;
  } catch (error) {
    console.error('Error verificando token:', error);
    throw error;
  }
};

/**
 * Función para cerrar sesión
 */
export const logoutUser = () => {
  localStorage.removeItem('authToken');
  // Aquí podrías hacer otras limpiezas de estado si es necesario
};
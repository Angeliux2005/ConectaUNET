export const fetchApi = async (url, options = {}) => {
  const token = localStorage.getItem('token');
  const headers = new Headers(options.headers || {});

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  if (options.body && !(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers
    });

    if (response.status === 401) {
      console.warn('Sesión expirada o no autorizada. Cerrando sesión...');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login'; 
      return Promise.reject('Sesión expirada');
    }

    return response;
  } catch (error) {
    console.error('Error de red en fetchApi:', error);
    throw error;
  }
};

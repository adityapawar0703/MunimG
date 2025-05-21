export const environment = {
  production: true,
  apiUrl:
    window.location.hostname === 'localhost'
      ? 'http://localhost:5000/api'
      : 'https://munimg-backend.onrender.com/api',
  // trackingApiUrl: 'https://visitor-tracking-api.vercel.app/api/visit',
  trackingApiUrl: 'https://visitor-tracking-api.vercel.app/api/visit',

};

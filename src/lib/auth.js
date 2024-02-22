// auth.js
import { goto } from '$app/navigation';

export function isAuthenticated() {
  if (typeof document !== 'undefined') {
    const token = getJwtToken();
    if (!token) {
      goto('/login');
      return false;
    }
    return token; // Return true if the JWT token exists
  }
}

/* export function getUserClaims() {
    const token = getJwtToken();
    if (!token) {
      return null;
    }
    // Parse the JWT token and retrieve claims
    const payload = token.split('.')[1];
    const decodedPayload = atob(payload);
    return JSON.parse(decodedPayload);
  } */

function getJwtToken() {
  if (typeof document !== 'undefined') {
    const jwtCookie = document.cookie.split('; ').find((cookie) => cookie.startsWith('sb-access-token='));
    if (jwtCookie) {
      return jwtCookie.split('=')[1];
    }
  }
  return null;
}
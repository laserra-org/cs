// auth.js
import { goto } from '$app/navigation';
import { supabase } from "$lib/supabaseClient.js";

export function isAuthenticated() {
  if (typeof document !== 'undefined') {
    const token = getJwtToken();
    const localStorageData = localStorage.getItem("sb-jzzzibgfrdarpjzaezzb-auth-token");
    if (!localStorageData) {
      const { error } = supabase.auth.signOut()
      document.cookie =
        "sb-jzzzibgfrdarpjzaezzb-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      // Redirect the user to a specific page after logging out (e.g., the login page)
    }
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
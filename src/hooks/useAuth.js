import { useState, useEffect } from 'react';
import jwtDecode from "jwt-decode";
 // Make sure to import the jwt library

function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    // Check if the user is logged in and decode the token
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded) {
        setUser(decoded);
      } else {
        // Invalid token, remove it from localStorage and redirect to login
        localStorage.removeItem('token');
        history.replace('/login');
      }
    }

    setLoading(false); // Set loading to false once the check is done
  }, []);

  return { user, loading };
}

export default useAuth;
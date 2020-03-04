import React, { createContext, useRef, useEffect, useContext, useState } from 'react';

const AuthContext = createContext({
  current: {
    token: null,
  }
});

export const Provider: React.FC = ({ children }) => {
  const value = useRef({
    token: null,
  });

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useLogin = () => {
  const auth = useContext(AuthContext);

  return async (email: string, password: string) => {
    const response = await fetch('http://localhost:5000/api/auth/sign_in', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        }
      })
    });

    if (response.ok) {
      const json = await response.json() as SignInResponse;
      auth.current.token = json.token;
    } else {
      return Promise.reject(response.statusText);
    }
  }
}

export const useLogout = () => {
  const auth = useContext(AuthContext);

  return async () => {
    auth.current.token = null;
  }
}

export const useIsLoggedIn = () => {
  const auth = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(() => Boolean(auth.current.token));

  useEffect(
    () => {
      if (Boolean(auth.current.token)) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    },
    [setIsLoggedIn]
  );

  return isLoggedIn;
}

interface SignInResponse {
  token: string;
}

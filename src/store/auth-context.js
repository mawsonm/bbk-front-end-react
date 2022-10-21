import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

export const AuthContext = React.createContext({
  isAuthenticated: false,
  token: "",
  login: (token, expirationTime) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  if (expirationTime) {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    return adjExpirationTime - currentTime;
  }
  return 0;
};

const retrieveStoredToken = () => {
  const initialToken = window.localStorage.getItem("token");
  const storedRemainingTime = window.localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedRemainingTime);
  // 15 minutes
  if (remainingTime <= 900000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: initialToken,
    duration: remainingTime,
  };
};

const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const loginHandler = (token, expirationTime) => {
    setToken(token);

    console.log(token);

    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    console.log(remainingTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    console.log("yo");

    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [logoutHandler, tokenData]);

  const val = {
    token: token,
    isAuthenticated: !!token,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={val}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

import { createContext, useContext, useEffect, useState } from "react";

import * as auth from "../service/auth";

import api from "../service/api";

const signIn = () => {};

const signOut = () => {};

const AuthContext = createContext({ signed: false, loading: false, user: {}, signIn, signOut });

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("it must be used within a Provider");
  return auth;
}

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = localStorage.getItem("user");
      const storagedToken = localStorage.getItem("token");

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }
    loadStoragedData();
  }, []);

  const handleRemoveUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const handleSetHeaders = (response) => {
    localStorage.setItem("token", response.token);
    api.defaults.headers.Authorization = `Bearer ${response.token}`;
  };

  const handleSetUser = (response) => {
    setUser(response.user);
    localStorage.setItem("user", JSON.stringify(response.user));
  };

  const handleSignIn = async () => {
    setLoading(true);
    const response = await auth.signIn();
    handleSetHeaders(response);
    handleSetUser(response);
    setLoading(false);
  };

  const handleSignOut = async () => {
    handleRemoveUser(null);
  };

  return <AuthContext.Provider value={{ signed: !!user, loading: loading, user: user, signIn: handleSignIn, signOut: handleSignOut }}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;

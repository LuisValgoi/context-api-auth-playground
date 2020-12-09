import { createContext, useContext, useEffect, useState } from "react";

import * as auth from "../service/auth";

const signIn = () => {};

const signOut = () => {};

const AuthContext = createContext({ signed: false, loading: false, user: {}, signIn, signOut });

export const AuthProvider = (props) => {
  const [user, setUser] = useState(localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")));
  const [loading, setLoading] = useState(false);

  const handleSetUser = (response) => {
    setUser(response.user);
    localStorage.setItem("user", JSON.stringify(response.user));
  };

  const handleRemoveUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const handleSignIn = async () => {
    setLoading(true);
    const response = await auth.signIn();
    handleSetUser(response);
    setLoading(false);
  };

  const handleSignOut = async () => {
    handleRemoveUser(null);
  };

  return <AuthContext.Provider value={{ signed: !!user, loading: loading, user: user, signIn: handleSignIn, signOut: handleSignOut }}>{props.children}</AuthContext.Provider>;
};

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("it must be used within a Provider");
  return auth;
}

export default AuthContext;

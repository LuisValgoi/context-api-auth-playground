import { createContext, useContext, useState } from "react";

import * as auth from "../service/auth";

const signIn = () => {};

const signOut = () => {};

const AuthContext = createContext({ signed: false, signing: false, user: {}, signIn, signOut });

export const AuthProvider = (props) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [signing, setSigning] = useState(false);

  const handleSetUser = (response) => {
    setUser(response.user);
    localStorage.setItem("user", response.user);
  };

  const handleRemoveUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  async function signIn() {
    setSigning(true);
    const response = await auth.signIn();
    handleSetUser(response);
    setSigning(false);
  }

  async function signOut() {
    handleRemoveUser(null);
  }

  return <AuthContext.Provider value={{ signed: !!user, signing: signing, user: user, signIn, signOut }}>{props.children}</AuthContext.Provider>;
};

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("it must be used within a Provider");
  return auth;
}

export default AuthContext;

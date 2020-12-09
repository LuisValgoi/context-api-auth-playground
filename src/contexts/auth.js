import { createContext, useContext, useState } from "react";

import * as auth from "../service/auth";

const signIn = () => {};

const signOut = () => {};

const AuthContext = createContext({ signed: false, user: {}, signIn, signOut });

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);
  }

  async function signOut() {
    setUser(null);
  }

  return <AuthContext.Provider value={{ signed: !!user, user: user, signIn, signOut }}>{props.children}</AuthContext.Provider>;
};

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("it must be used within a Provider");
  return auth;
}

export default AuthContext;

import React from "react";

import { useAuth } from "../../contexts/auth";

const SignIn = () => {
  const { signIn, loading } = useAuth();

  return (
    <>
      <button onClick={() => signIn()}>{loading ? "Loading..." : "SignIn"}</button>
    </>
  );
};

export default SignIn;

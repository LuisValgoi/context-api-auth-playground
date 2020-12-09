import React from "react";

import { useAuth } from "../../contexts/auth";

const SignIn = () => {
  const { signIn, signing } = useAuth();

  return (
    <>
      <button onClick={() => signIn()}>{signing ? "Loading..." : "SignIn"}</button>
    </>
  );
};

export default SignIn;

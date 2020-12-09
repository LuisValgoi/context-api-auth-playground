import React from "react";

import { useAuth } from "../../contexts/auth";

const SignIn = () => {
  const { signIn } = useAuth();

  return (
    <>
      <button onClick={() => signIn()}>SignIn</button>
    </>
  );
};

export default SignIn;

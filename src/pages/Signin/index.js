import React from "react";

import { signIn } from "../../service/auth";

const SignIn = () => {
  const handleSignIn = async () => {
    const res = await signIn();
    console.log(res);
  };

  return (
    <>
      <button onClick={() => handleSignIn()}>SignIn</button>
    </>
  );
};

export default SignIn;

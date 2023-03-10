import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import SpecialButton from "../SpecialButton/SpecialButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      style={{
        paddingLeft: "600px",
        paddingTop: "80px",
        width: "1000px",
      }}
    >
      <FormInput
        type="email"
        name="email"
        label="Email"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        required
      />

      <FormInput
        type="password"
        name="password"
        label="Password"
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
        required
      />

      <SpecialButton
        style={{
          marginLeft: "100px",
        }}
      >
        {" "}
        Login
      </SpecialButton>
    </div>
  );
};

export default Login;

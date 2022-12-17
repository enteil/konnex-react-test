import React, { useState } from "react";
import { EmailInput } from "../components/general/inputs/email-input";
import { PasswordInput } from "../components/general/inputs/password-input";
import { PrimaryButton } from "../components/general/buttons/primary-button";
import { SecondaryButton } from "../components/general/buttons/secondary-button";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const renderEmailInput = () => {
    return (
      <EmailInput
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />
    );
  };
  const renderPasswordInput = () => {
    return (
      <PasswordInput
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
      />
    );
  };
  const renderPrimaryButtonLogin = () => {
    return <PrimaryButton type="submit" name={"Iniciar sesión"} />;
  };
  const renderSecondaryButtonRegister = () => {
    return (
      <SecondaryButton
        type="button"
        name={"¿No tiene ninguna cuenta? Crear una"}
      />
    );
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <form onSubmit={handleSubmit}>
      {renderEmailInput()}
      {renderPasswordInput()}
      {renderPrimaryButtonLogin()}
      {renderSecondaryButtonRegister()}
    </form>
  );
};

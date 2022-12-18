import React, { useEffect, useState } from "react";
import { PrimaryTitle } from "../components/general/titles/primary-title";
import { NameInput } from "../components/general/inputs/name-input";
import { EmailInput } from "../components/general/inputs/email-input";
import { PasswordInput } from "../components/general/inputs/password-input";
import { PrimaryButton } from "../components/general/buttons/primary-button";
import { SecondaryButton } from "../components/general/buttons/secondary-button";
import { ConfirmPasswordInput } from "../components/general/inputs/confim-password-input";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const Register = () => {
  const navigate = useNavigate();
  const stateAuth = useSelector((state: any) => state.user);
  useEffect(() => {
    if (stateAuth.token || stateAuth.token !== "") {
      navigate("/search");
    }
  }, [navigate, stateAuth.token]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const renderPrimaryTitleRegister = () => {
    return <PrimaryTitle name={"Crea una cuenta"} />;
  };
  const renderNameInput = () => {
    return (
      <NameInput value={name} onChange={(e: any) => setName(e.target.value)} />
    );
  };
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
  const renderConfirmPasswordInput = () => {
    return (
      <ConfirmPasswordInput
        value={confirmPassword}
        onChange={(e: any) => setConfirmPassword(e.target.value)}
      />
    );
  };
  const renderPrimaryButtonRegister = () => {
    return <PrimaryButton type="submit" name={"Crear"} />;
  };
  const renderSecondaryButtonLogin = () => {
    return (
      <SecondaryButton
        type="button"
        name={"¿Ya tiene una cuenta? Entrar"}
        onClick={() => navigate("/")}
      />
    );
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="FormContainer">
      <form className="FormStyles" onSubmit={handleSubmit}>
        {renderPrimaryTitleRegister()}
        {renderNameInput()}
        {renderEmailInput()}
        {renderPasswordInput()}
        {renderConfirmPasswordInput()}
        {renderPrimaryButtonRegister()}
        {renderSecondaryButtonLogin()}
      </form>
    </div>
  );
};

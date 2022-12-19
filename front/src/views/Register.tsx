import React, { useState } from "react";
import { PrimaryTitle } from "../components/general/titles/primary-title";
import { TextInput } from "../components/general/inputs/text-input";
import { EmailInput } from "../components/general/inputs/email-input";
import { PasswordInput } from "../components/general/inputs/password-input";
import { PrimaryButton } from "../components/general/buttons/primary-button";
import { SecondaryButton } from "../components/general/buttons/secondary-button";
import { ConfirmPasswordInput } from "../components/general/inputs/confim-password-input";
import { useNavigate } from "react-router-dom";
import config from "../config/config";
import { success, error } from "@pnotify/core";
import axios from "axios";
import { saveToken } from "../app/features/auth/authSlice";
import { useDispatch } from "react-redux";
export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const registerAction = async () => {
    const body = { data: { name, email, password, confirmPassword } };
    await axios
      .post(`${config.baseUrl}auth/register`, body)
      .then((result) => {
        success({ title: "OK", text: result.data.message });
        dispatch(saveToken(result.data.data));
        navigate("/search");
      })
      .catch((err) => {
        error({ title: "Error", text: err.response.data.message });
      });
  };
  const renderPrimaryTitleRegister = () => {
    return <PrimaryTitle name={"Crea una cuenta"} />;
  };
  const renderTextInput = () => {
    return (
      <TextInput
        label={"Nombre"}
        placeholder={"Tu nombre"}
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />
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
    return (
      <PrimaryButton
        type="submit"
        name={"Crear"}
        onClick={() => registerAction()}
      />
    );
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
  return (
    <div className="FormContainer">
      <div className="FormStyles">
        {renderPrimaryTitleRegister()}
        {renderTextInput()}
        {renderEmailInput()}
        {renderPasswordInput()}
        {renderConfirmPasswordInput()}
        {renderPrimaryButtonRegister()}
        {renderSecondaryButtonLogin()}
      </div>
    </div>
  );
};

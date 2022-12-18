import React, { useEffect, useState } from "react";
import { PrimaryTitle } from "../components/general/titles/primary-title";
import { EmailInput } from "../components/general/inputs/email-input";
import { PasswordInput } from "../components/general/inputs/password-input";
import { PrimaryButton } from "../components/general/buttons/primary-button";
import { SecondaryButton } from "../components/general/buttons/secondary-button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveToken } from "../app/features/auth/authSlice";
export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateAuth = useSelector((state: any) => state.user);
  useEffect(() => {
    dispatch(saveToken("esto es lo que estoy pasando prro"));
    if (stateAuth.token || stateAuth.token !== "") {
      navigate("/search");
    }
  }, [dispatch, navigate, stateAuth.token]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const renderPrimaryTitleLogin = () => {
    return <PrimaryTitle name={"Iniciar sesión"} />;
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
  const renderPrimaryButtonLogin = () => {
    return <PrimaryButton type="submit" name={"Iniciar sesión"} />;
  };
  const renderSecondaryButtonRegister = () => {
    return (
      <SecondaryButton
        type="button"
        name={"¿No tiene ninguna cuenta? Crear una"}
        onClick={() => navigate("/register")}
      />
    );
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="FormContainer">
      <form className="FormStyles" onSubmit={handleSubmit}>
        {renderPrimaryTitleLogin()}
        {renderEmailInput()}
        {renderPasswordInput()}
        {renderPrimaryButtonLogin()}
        {renderSecondaryButtonRegister()}
      </form>
    </div>
  );
};

import config from "../config/config";
import { PrimaryTitle } from "../components/general/titles/primary-title";
import { EmailInput } from "../components/general/inputs/email-input";
import { PasswordInput } from "../components/general/inputs/password-input";
import { PrimaryButton } from "../components/general/buttons/primary-button";
import { SecondaryButton } from "../components/general/buttons/secondary-button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveToken } from "../app/features/auth/authSlice";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginAction = async () => {
    const body = { data: { email, password } };
    const result = await axios.post(`${config.baseUrl}auth/login`, body);
    if (result.status === 200) {
      dispatch(saveToken(result.data.data));
      navigate("/search");
    } else {
      // @ts-ignore
      alert(result.message);
    }
  };
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
    return (
      <PrimaryButton
        type="submit"
        name={"Iniciar sesión"}
        onClick={() => loginAction()}
      />
    );
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

  return (
    <div className="FormContainer">
      <div className="FormStyles">
        <>
          {renderPrimaryTitleLogin()}
          {renderEmailInput()}
          {renderPasswordInput()}
          {renderPrimaryButtonLogin()}
          {renderSecondaryButtonRegister()}
        </>
      </div>
    </div>
  );
};

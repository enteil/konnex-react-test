import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  const stateAuth = useSelector((state: any) => state.user);
  useEffect(() => {
    if (!stateAuth.token || stateAuth.token === "") {
      navigate("/");
    }
  }, [navigate, stateAuth.token]);
  return <p>Hola desde search</p>;
};

import { useDispatch, useSelector } from "react-redux";
import { SecondaryTitle } from "../general/titles/secondary-title";
import { PrimaryButton } from "../general/buttons/primary-button";
import { cleanToken } from "../../app/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateAuth = useSelector((state: any) => state.user);
  const dispatchLogoutAction = () => {
    dispatch(cleanToken());
    navigate("/");
  };
  const renderSecondaryTitleName = () => {
    return <SecondaryTitle name={`Bienvenid@ ${stateAuth.name}`} />;
  };
  const renderSecondaryTitleSearch = () => {
    return <SecondaryTitle name={"Restaurates cerca de ti"} />;
  };
  const renderPrimaryButtonLogout = () => {
    return (
      <PrimaryButton
        type="button"
        name={"Cerrar sesión"}
        onClick={() => dispatchLogoutAction()}
      />
    );
  };
  return (
    <div className="grid grid-cols-6 gap-4 NavBarStyles">
      <div className="col-span-2">{renderSecondaryTitleSearch()}</div>
      <div className="col-span-3">{renderSecondaryTitleName()}</div>
      <div className="col-span-1 flex flex-row-reverse">
        {renderPrimaryButtonLogout()}
      </div>
    </div>
  );
};

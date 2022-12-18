import { LOGIN, REGISTER, LOGOUT } from "../types/auth";

export const loginAction = (data: any) => ({ type: LOGIN, payload: data });
export const logoutAction = (data: any) => ({ type: LOGOUT, payload: data });
export const registerAction = (data: any) => ({
  type: REGISTER,
  payload: data,
});

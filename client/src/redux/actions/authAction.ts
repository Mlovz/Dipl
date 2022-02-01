import { Dispatch } from "react";
import { api } from "../../api";
import {
  setStoredAuthToken,
  getStoredAuthToken,
  removeStoredAuthToken,
} from "../../shared/authToken";
import { ALERT, AlertType } from "../types/alertType";
import { AuthTypeEnum, AuthType } from "../types/authTypes";
import { FETCH } from "../../shared/contants";

export const login =
  (data: {}, history: any) =>
  async (dispatch: Dispatch<AuthType | AlertType>) => {
    try {
      dispatch({ type: AuthTypeEnum.LOADING, payload: true });

      const res = await api.post("login", data);

      if (res.status === FETCH.SUCCESS) {
        dispatch({
          type: AuthTypeEnum.AUTH,
          payload: {
            user: res.data.user,
            token: res.data.access_token,
          },
        });

        setStoredAuthToken(res.data.access_token);
        history("/");
      }

      dispatch({ type: AuthTypeEnum.LOADING, payload: false });
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.message } });
    }
  };

export const refreshtoken =
  () => async (dispatch: Dispatch<AuthType | AlertType>) => {
    if (getStoredAuthToken()) {
      try {
        dispatch({ type: ALERT, payload: { loading: true } });

        const res = await api.post("refresh_token");

        dispatch({
          type: AuthTypeEnum.AUTH,
          payload: {
            user: res.data.user,
            token: res.data.access_token,
          },
        });

        dispatch({ type: ALERT, payload: { loading: false } });
      } catch (err: any) {
        dispatch({
          type: ALERT,
          payload: { errors: err.response.data.message },
        });
      }
    }
  };

export const logout = () => async (dispatch: Dispatch<AlertType>) => {
  try {
    await api.post("logout");
    removeStoredAuthToken();
    window.location.href = "/";
  } catch (err: any) {
    dispatch({
      type: ALERT,
      payload: { errors: err.response.data.message },
    });
  }
};

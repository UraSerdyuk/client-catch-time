import axios from "axios";
import { setUser } from "../reducers/userReducer";
import {updateBestScoreAction, updateScoreAction} from "./game.action";
import {developUrl, hostUrl} from "../../constants/api.constants";

export const registration = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${hostUrl}api/auth/registration`,
      { email, password }
    );

    alert(response.data?.message);
    console.log("response", response);
  } catch (error) {
    alert(error.response?.data?.message);
  }
};

export const authorization = (email: string, password: string) => async (dispatch: any) => {
    try {
      const response = await axios.post(
        `${hostUrl}api/auth/login`,
        { email, password }
      );

      dispatch(setUser(response.data.user));
      dispatch(updateBestScoreAction(response.data.user.score));
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

export const refreshToken = (token: string ) => async (dispatch: any, store: any) => {
  try {
    const {data} = await axios.post(`${hostUrl}api/auth/token/refresh`,{token});

    dispatch(setUser(data.user));
    dispatch(updateBestScoreAction(data.user.score));

  } catch (error) {
    console.log(error);
    error.response?.data?.message &&  alert(error.response?.data?.message);
  }
}

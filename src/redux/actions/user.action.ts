import axios from "axios";
import { setUser } from "../reducers/userReducer";
import {updateBestScoreAction, updateScoreAction} from "./game.action";

export const registration = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/registration",
      { email, password }
    );

    alert(response.data.message);
    console.log("response", response);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const authorization = (email: string, password: string) => async (dispatch: any) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      dispatch(setUser(response.data.user));
      dispatch(updateBestScoreAction(response.data.user.score));
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

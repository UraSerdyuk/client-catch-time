import axios from "axios";
import {setUser} from "../reducers/userReducer";

export const registration = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/registration",
        {            email,          password        }
    );

    alert(response.data.message);
    console.log('response',response);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const authorization =  (email: string, password: string) => {
  return async (dispatch : any) => {
    try {
      const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          {            email,          password        }
      );

      dispatch(setUser(response.data.user));
      localStorage.setItem('token',response.data.token);
    } catch (error) {
      alert(error.response.data.message);
    }
  }
};

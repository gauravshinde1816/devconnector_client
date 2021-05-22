import axios from "axios";
import setUserToken from "../utils/setUserToken";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_PROFILE,
  LOGOUT,
} from "./types";
import { setAlert } from "./alert";
import { baseURL } from "./baseURL";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setUserToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${baseURL}/api/auth`);
    // console.log(res.status);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//register new user
export const register = ({ name, email, password }, history) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });

    const res = await axios.post(`${baseURL}/api/users`, body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    history.push("/dashboard");
    dispatch(
      setAlert(
        "Welcome to Devconnector, Kindly create your profile before proceeding furthur",
        "success"
      )
    );
  } catch (error) {
    // console.log(error.response.data);
    const errors = error.response.data.error;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    const res = await axios.post(`${baseURL}/api/auth`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    const err = error.response.data.error;
    if (err) {
      dispatch(setAlert(err, "danger"));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: CLEAR_PROFILE,
  });
  dispatch({
    type: LOGOUT,
  });
};

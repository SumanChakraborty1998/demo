import {
    getDataFromLocalStorage,
    setDataToLocalStorage,
} from "../../utils/localStorage";
import {
    AUTH_FAILURE,
    AUTH_LOGOUT,
    AUTH_REQUEST,
    AUTH_SUCCESS,
} from "./actionTypes";

const initState = {
    isAuth: getDataFromLocalStorage("isAuth") || false,
    token: getDataFromLocalStorage("token") || "xxxxxxxxxxxxxx",
    isAuthLoading: false,
    isAuthError: false,
};

export const authReducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case AUTH_REQUEST: {
            return {
                ...state,
                isAuthLoading: true,
                isAuthError: false,
            };
        }
        case AUTH_SUCCESS: {
            setDataToLocalStorage("isAuth", true);
            setDataToLocalStorage("token", payload);
            return {
                ...state,
                isAuthLoading: false,
                isAuth: true,
                token: payload,
                isAuthError: false,
            };
        }
        case AUTH_FAILURE: {
            setDataToLocalStorage("isAuth", false);
            setDataToLocalStorage("token", "xxxxxxxxxxxx");

            return {
                ...state,
                isAuthLoading: false,
                isAuth: false,
                token: "",
                isAuthError: true,
            };
        }
        case AUTH_LOGOUT: {
            setDataToLocalStorage("isAuth", false);
            setDataToLocalStorage("token", "xxxxxxxxxxxx");

            return {
                ...state,
                isAuthLoading: false,
                isAuth: false,
                token: "xxxxxxxxxxxxxxxxx",
                isAuthError: false,
            };
        }
        default:
            return state;
    }
};

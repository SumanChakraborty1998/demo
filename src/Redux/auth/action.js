import {
    AUTH_FAILURE,
    AUTH_LOGOUT,
    AUTH_REQUEST,
    AUTH_SUCCESS,
} from "./actionTypes";

export const authRequest = () => {
    return {
        type: AUTH_REQUEST,
    };
};

export const authSuccess = (payload) => {
    return {
        type: AUTH_SUCCESS,
        payload,
    };
};

export const authFailure = (payload) => {
    return {
        type: AUTH_FAILURE,
        payload,
    };
};

export const authLogout = () => {
    return {
        type: AUTH_LOGOUT,
    };
};

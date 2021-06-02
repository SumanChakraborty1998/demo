import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { authFailure, authRequest, authSuccess } from "../Redux/auth/action";

export const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authRequest());
        const payload = {
            email: mail,
            password,
        };
        axios
            .post("https://reqres.in/api/login", payload)
            .then((res) => dispatch(authSuccess(res.data.token)))
            .catch((err) => dispatch(authFailure(err)));
    };

    return !isAuth ? (
        <form onSubmit={handleSubmit}>
            <br />
            <input
                type="text"
                placeholder="Enter Email"
                onChange={(e) => setMail(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input type="submit" value="LOGIN" />
        </form>
    ) : (
        <Redirect to="/" />
    );
};

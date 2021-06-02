import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import {
    getTodoFailure,
    getTodoRequest,
    getTodoSuccess,
} from "../Redux/todo/action";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const isTodoLoading = useSelector((state) => state.todo.isTodoLoading);
    const isTodoError = useSelector((state) => state.todo.isTodoError);

    const dispatch = useDispatch();

    const handleGet = () => {
        dispatch(getTodoRequest());
        axios
            .get("http://localhost:3001/todos")
            .then((res) => dispatch(getTodoSuccess(res.data)))
            .catch(() => dispatch(getTodoFailure()));
    };

    useEffect(() => handleGet(), []);

    return isAuth ? (
        <div>
            <TodoInput handleGet={handleGet} />

            {isTodoLoading ? (
                <div>...Loading</div>
            ) : isTodoError ? (
                <div>Something went wrong...</div>
            ) : (
                <TodoList handleGet={handleGet} />
            )}
        </div>
    ) : (
        <Redirect to="/login" />
    );
};

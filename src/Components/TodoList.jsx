import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
    deleteTodoFailure,
    deleteTodoRequest,
    deleteTodoSuccess,
    toggleTodoFailure,
    toggleTodoRequest,
    toggleTodoSuccess,
} from "../Redux/todo/action";

const Card = styled.div`
    display: flex;
    padding: 1% 5%;
    justify-content: space-between;
    background: ${(props) => (props.status ? "lime" : "tomato")};
    width: 400px;
    margin: auto;
    margin-top: 2%;
`;

export const TodoList = ({ handleGet }) => {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleToggle = (item) => {
        dispatch(toggleTodoRequest());
        axios
            .patch(`http://localhost:3001/todos/${item.id}`, {
                status: !item.status,
            })
            .then(() => dispatch(toggleTodoSuccess()))
            .catch(() => dispatch(toggleTodoFailure()))
            .finally(() => handleGet());
    };

    const handleDelete = (id) => {
        dispatch(deleteTodoRequest());
        axios
            .delete(`http://localhost:3001/todos/${id}`)
            .then(() => dispatch(deleteTodoSuccess()))
            .catch(() => dispatch(deleteTodoFailure()))
            .finally(() => handleGet());
        //
    };

    return (
        <div>
            {todos.map((item) => (
                <Card status={item.status} key={item.id}>
                    <div>{item.title}</div>
                    <div>{`${item.status}`}</div>
                    <div>
                        <button onClick={() => handleToggle(item)}>
                            TOGGLE
                        </button>
                        <button onClick={() => handleDelete(item.id)}>
                            DELETE
                        </button>
                    </div>
                </Card>
            ))}
        </div>
    );
};
